/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('hsp.schedule').controller('EventDetailCtrl', ['$scope', '$location', '$q', '$modal', 'ActiveEvent', 'UserData', 'hsCalendarService', 'Util',
        function ($scope, $location, $q, $modal, ActiveEvent, UserData, calendars, Util) {
            var patch = {
                    extendedProperties: {
                        private: {}
                    }
                },
                // if we're looking at a customized instance of a recurring event
                // certain properties should be saved back to the recurring event
                // instead of the customized instance.
                recurringParentPatch = null,
                patchUpdated = false,
                recurringParentPatchUpdated = false;

            function setupEvent(anEvent) {
                var parentEvt = calendars.getEvent(anEvent.recurringEventId),
                    subjectId = Util.safeRead(parentEvt || anEvent, 'extendedProperties.private.subjectId');
                if (angular.isDefined(subjectId)) {
                    anEvent.subject = UserData.subjects.find(function (sub) {
                        return sub.id === subjectId;
                    });
                }

                return anEvent;
            }

            function setProperty(propertyName, propertyValue) {
                if (recurringParentPatch !== null &&
                        (propertyName.indexOf('subjectId') >= 0)) {
                    Util.safeSet(recurringParentPatch, propertyName, propertyValue);
                    recurringParentPatchUpdated = true;
                } else {
                    Util.safeSet(patch, propertyName, propertyValue);
                    patchUpdated = true;
                }
            }

            $scope.subjects = UserData.subjects;
            $scope.evt = setupEvent(ActiveEvent.getEvent());

            // create a patch object for the parent recurring event if applicable
            if ($scope.evt.recurringEventId) {
                recurringParentPatch = angular.copy(patch);
            }

            $scope.onSubjectChange = function () {
                setProperty('extendedProperties.private.subjectId', $scope.evt.subject ? $scope.evt.subject.id : null);
            };

            $scope.onSummaryChange = function () {
                setProperty('summary', $scope.evt.summary);
            };

            $scope.onDescriptionChange = function () {
                setProperty('description', $scope.evt.description);
            };

            $scope.setCompleted = function () {
                calendars.patchEvent($scope.evt.calendarId, $scope.evt, {
                    extendedProperties: {
                        private: {
                            completeDateTime: 'foo'
                        }
                    }
                }, false, ActiveEvent.getStart(), ActiveEvent.getEnd());
            };

            $scope.ok = function () {
                var finishPromise = $q.when(false),
                    patches = [],
                    evt = $scope.evt;
                if ((patchUpdated || recurringParentPatchUpdated) && $scope.evtForm.$valid) {
                    if (patchUpdated) {
                        patches.push(calendars.patchEvent(evt.calendarId, evt, patch));
                    }

                    if (recurringParentPatchUpdated) {
                        patches.push(calendars.patchEvent(evt.calendarId, evt.recurringEventId, recurringParentPatch));
                    }
                    finishPromise = $q.all(patches);
                }

                finishPromise.then(function (results) {
                    $location.url('/');
                });
            };

            $scope.cancel = function () {
                $location.url('/');
            };


        }]);
}());
