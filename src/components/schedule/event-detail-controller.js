/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

export default (function () {
    'use strict';
    return ['$scope', '$location', '$q', '$mdDialog', 'ScheduleModel', 'hsAuthService', 'hsCalendarService', 'Util',
        function ($scope, $location, $q, $mdDialog, ScheduleModel, hsAuthService, calendars, Util) {
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
                recurringParentPatchUpdated = false,
                UserData = hsAuthService.getUserData();

            function setupEvent(evtViewState) {
                var parentEvt = calendars.getEvent(evtViewState.resource.recurringEventId),
                    subjectId = Util.safeRead(parentEvt || evtViewState.resource, 'extendedProperties.private.subjectId');
                if (angular.isDefined(subjectId)) {
                    evtViewState.subject = UserData.subjects.find(function (sub) {
                        return sub.id === subjectId;
                    });
                }

                return evtViewState;
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
            $scope.evt = setupEvent(ScheduleModel.getActiveEventViewState());

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

            $scope.toggleCompletion = ScheduleModel.toggleCompletion.apply(null, [$scope.evt]);

            $scope.ok = function () {
                var finishPromise = $q.when(false),
                    patches = [],
                    evt = $scope.evt;
                if ((patchUpdated || recurringParentPatchUpdated) && $scope.evtForm.$valid) {
                    if (patchUpdated) {
                        patches.push(ScheduleModel.patchEvent(evt, patch, false));
                    }

                    if (recurringParentPatchUpdated) {
                        patches.push(ScheduleModel.patchEvent(evt.recurringEventId, recurringParentPatch));
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
        }];
}());
