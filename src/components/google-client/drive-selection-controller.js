/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

export default (function () {
    'use strict';
    return ['$scope', '$location', '$q', '$log', '$exceptionHandler', '$mdDialog', 'hsDriveService', 'hsAuthService',
        function ($scope, $location, $q, $log, $exceptionHandler, $mdDialog, driveService, auth) {
            var controller = this;
            controller.newFile = { id: null, evt: controller.evt, blank: true };
            controller.loading = true;
            controller.currentTab = 'existing';
            driveService.getFileList()
                .then(function(result) {
                    controller.files = result.result.items;
                })
                .catch(function(error) {
                    $exceptionHandler(error, 'Error loading drive files');
                })
                .finally(function() { controller.loading = false; });

            this.onTabSelected = function(tabName) {
                controller.currentTab = tabName;
            }

            this.onFileChange = function(fileList, evt) {
                controller.newFile.blank = false;
                controller.newFile.fileHandle = fileList[0];
            }

            this.closeDialog = function (driveFile) {
                var colleagues = auth.getUserData().colleagues || [],
                    editors = [{ email: controller.evt.studentEmail, role: 'writer' }].concat(colleagues.map(function(colleague) {
                        return { email: colleague.email, role: 'writer' };
                    }));
                driveService.ensurePermissions(driveFile, editors).then(function(sharedFile) {
                    $mdDialog.hide(sharedFile);
                }, function(rejection){
                    var msg = 'setting permissions failed';
                    if(rejection.body && rejection.body.error) {
                        msg = rejection.body.error.message;
                    }

                    $log.error('Unable to set permissions for selected file: ' + msg);
                });
            }

            this.createFile = function () {
                driveService.insertFile(controller.newFile).then(function(fileResource) {
                    $mdDialog.hide(fileResource);
                }, function(rejection) {
                    $mdDialog.cancel(rejection);
                });
            }

            this.cancelDialog = function() {
                $mdDialog.cancel();
            }
        }];
}());
