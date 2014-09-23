/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

(function () {
    'use strict';
    angular.module('myApp').controller('ModalInstanceCtrl', ['$scope', '$modalInstance', '$q', 'UserData', 'hsCalendarService', 'Util', 'evt',
        function ($scope, $modalInstance, $q, UserData, calendars, Util, evt) {
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
                var parentEvt = calendars.getEvent(anEvent.resource.recurringEventId),
                    subjectId = Util.safeRead(parentEvt || anEvent.resource, 'extendedProperties.private.subjectId');
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

            // create a patch object for the parent recurring event if applicable
            if (evt.resource.recurringEventId) {
                recurringParentPatch = angular.copy(patch);
            }

            $scope.subjects = UserData.subjects;
            $scope.evt = setupEvent(evt);

            $scope.onSubjectChange = function () {
                setProperty('extendedProperties.private.subjectId', $scope.evt.subject ? $scope.evt.subject.id : null);
            };

            $scope.onSummaryChange = function () {
                setProperty('summary', $scope.evt.resource.summary);
            };

            $scope.onDescriptionChange = function () {
                setProperty('description', $scope.evt.resource.description);
            };

            $scope.ok = function () {
                var finishPromise = $q.when(false),
                    patches = [];
                if ((patchUpdated || recurringParentPatchUpdated) && $scope.evtForm.$valid) {
                    if (patchUpdated) {
                        patches.push(calendars.patchEvent(evt.calendarId, evt.resource, patch));
                    }

                    if (recurringParentPatchUpdated) {
                        patches.push(calendars.patchEvent(evt.calendarId, evt.resource.recurringEventId, recurringParentPatch));
                    }
                    finishPromise = $q.all(patches);
                }

                finishPromise.then(function (results) {
                    $modalInstance.close(evt);
                });
            };

            $scope.cancel = function () {
                $modalInstance.dismiss('cancel');
            };


        }]);
}());
