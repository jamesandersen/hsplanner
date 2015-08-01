/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

export default (function () {
    'use strict';
    return ['$q', '$log', 'hsAuthService', 'hsCalendarService', 'Util',
        function ($q, $log, hsAuthService, calendars, Util) {
            var userCalendarList = null,
                activeEventViewState = null,
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
                return hsAuthService.getUserData().subjects.find(function (sub) { return sub.id === subjectId; });
            }

            function buildEventViewState(evtResource) {
                var start = moment(evtResource.start.dateTime),
                    end = moment(evtResource.end.dateTime);

                $log.log('creating ' + evtResource.summary + ' event');
                return {
                    day: start.dayOfYear(),
                    start: start,
                    end: end,
                    startMinutes: start.hours() * 60 + start.minutes(),
                    endMinutes: end.hours() * 60 + end.minutes(),
                    fmtTime: start.format('hh:mma'),
                    subject: getSubject(evtResource),
                    completion: Util.safeRead(evtResource, 'extendedProperties.private.completion'),
                    resource: evtResource,
                    editable: angular.isArray(hsAuthService.getUserData().students)
                };
            }

            function patchEvent(evtViewState, patch, patchParent) {
                evtViewState.updating = true;
                return calendars.patchEvent(evtViewState.resource, patch, patchParent, start, end).then(function (evt) {
                    evtViewState.resource = evt;
                    evtViewState.updating = false;
                    return evtViewState;
                }, function (error) {
                    evtViewState.updating = false;
                    return $q.reject(error);
                });
            }

            function toggleCompletion(evtViewState) {
                if(!evtViewState) return;

                return patchEvent(evtViewState, {
                    extendedProperties: {
                        private: {
                            completion: !Util.safeRead(evtViewState.resource, 'extendedProperties.private.completion')
                                ? moment().format()
                                : null
                        }
                    }
                }, false).then(function (updatedEvtViewState) {

                    evtViewState.completion = Util.safeRead(updatedEvtViewState.resource, 'extendedProperties.private.completion');
                    return evtViewState;
                });
            }

            function fetchStudentEvents(calendarList, nextSyncToken) {

                return getUserCalendars().then(function (calendarList) {
                    var deferred = $q.defer(),
                        eventsByStudentID = {},
                        pendingStudents = 0,
                        userData = hsAuthService.getUserData();

                    // loop over students to fetch events for each
                    angular.forEach(userData.students || [userData], function (student) {
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

                                        eventsByStudentID[student.id].push(buildEventViewState(evtResource));
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
                    activeEventViewState = evt;
                },
                patchEvent: patchEvent,
                toggleCompletion: toggleCompletion,
                getActiveEventViewState: function () { return activeEventViewState; },
                getStart: function () { return start; },
                getEnd: function () { return end; }
            };
        }];
}());
