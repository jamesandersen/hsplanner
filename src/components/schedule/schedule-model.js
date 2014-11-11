/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('hsp.schedule').factory('ScheduleModel', ['$q', '$log', 'UserData', 'hsCalendarService', 'Util',
        function ($q, $log, UserData, calendars, Util) {
            var userCalendarList = null,
                eventResource = null,
                start = moment().startOf('day'),
                end = moment().endOf('day');

            function getUserCalendars() {
                if (userCalendarList) {
                    return $q.when(userCalendarList);
                }

                return calendars.getCalendarList().then(function (data) {
                    userCalendarList = data;
                    return userCalendarList;
                }, function (error) {
                    $log.error(error);
                    return $q.reject(error);
                });
            }

            function getSubject(evtResource) {
                var subjectId = Util.safeRead(evtResource, 'extendedProperties.private.subjectId');
                return UserData.subjects.find(function (sub) { return sub.id === subjectId; });
            }

            function setViewState(evtResource) {
                var start = moment(evtResource.start.dateTime),
                    end = moment(evtResource.end.dateTime);

                $log.log('creating ' + evtResource.summary + ' event');
                evtResource.view = {
                    day: start.dayOfYear(),
                    start: start,
                    end: end,
                    startMinutes: start.hours() * 60 + start.minutes(),
                    endMinutes: end.hours() * 60 + end.minutes(),
                    fmtTime: start.format('hh:mma'),
                    subject: getSubject(evtResource),
                    completion: Util.safeRead(evtResource, 'extendedProperties.private.completion')
                };
                return evtResource;
            }

            function patchEvent(evt, patch, patchParent) {
                evt.view.updating = true;
                return calendars.patchEvent(evt, patch, patchParent, start, end).then(function (evt) {
                    setViewState(evt);
                    evt.view.updating = false;
                    return evt;
                }, function (error) {
                    evt.view.updating = false;
                    return $q.reject(error);
                });
            }

            function toggleCompletion(evt) {
                evt.view.updating = true;
                return patchEvent(evt, {
                    extendedProperties: {
                        private: {
                            completion: !Util.safeRead(evt, 'extendedProperties.private.completion')
                                ? moment().format()
                                : null
                        }
                    }
                }, false).then(function (updatedResource) {
                    updatedResource.view.completion = Util.safeRead(updatedResource, 'extendedProperties.private.completion');
                    return updatedResource;
                }).finally(function () { evt.view.updating = false; });
            }

            function fetchStudentEvents(calendarList, nextSyncToken) {

                return getUserCalendars().then(function (calendarList) {
                    var deferred = $q.defer(),
                        eventsByStudentID = {},
                        pendingStudents = 0;
                    // loop over students to fetch events for each
                    angular.forEach(UserData.students, function (student) {
                        eventsByStudentID[student.id] = [];
                        var eventListPromises = [];

                        // build up a list of promises for events from the student's calendar(s)
                        angular.forEach(student.calendarIDs, function (studentCalendarId) {
                            var calendar = calendarList.items.find(function (cal, idx) {
                                return cal.id === studentCalendarId;
                            });
                            if (calendar) {
                                eventListPromises.push(calendars.getEventList(calendar.id, start.format(), end.format()));
                            }
                        });

                        if (eventListPromises.length) {
                            // fetch the events for the student's calendar(s)
                            pendingStudents++;
                            $q.all(eventListPromises).then(function (resultsArray) {
                                deferred.notify(student.name + ' data retrieved');
                                pendingStudents--;
                                angular.forEach(resultsArray, function (eventListResult) {
                                    angular.forEach(eventListResult.items, function (evtResource) {

                                        eventsByStudentID[student.id].push(setViewState(evtResource));
                                    });
                                });

                                if (pendingStudents === 0) {
                                    // we've now retrieved data from all students
                                    deferred.resolve(eventsByStudentID);
                                }
                            }, function (rejections) {
                                deferred.reject('Error fetching events for ' + student.name + ': ' + rejections);
                            });
                        }
                    });
                    return deferred.promise;
                });
            }

            return {
                fetchStudentEvents: fetchStudentEvents,
                changeDay: function (increment) {
                    start.add('days', increment);
                    end.add('days', increment);
                },
                setActiveEvent: function (evt) {
                    eventResource = evt;
                },
                patchEvent: patchEvent,
                toggleCompletion: toggleCompletion,
                getEvent: function () { return eventResource; },
                getStart: function () { return start; },
                getEnd: function () { return end; }
            };
        }]);
}());
