/*jslint plusplus: true, es5: true */
/*global angular: false, moment: false */

export default (function () {
    'use strict';
    return ['$scope', '$location', '$q', '$mdDialog', 'hsDriveService', 'Util',
        function ($scope, $location, $q, $mdDialog, driveService, Util) {
            var controller = this;
            controller.newFile = { id: null, evt: controller.evt, blank: true };
            controller.loading = true;
            controller.currentTab = 'existing';
            driveService.getFileList().then(function(result) {
                controller.files = result.result.items;
                controller.loading = false;
            });

            this.onTabSelected = function(tabName) {
                controller.currentTab = tabName;
            }

            this.onFileChange = function(fileList, evt) {
                controller.newFile.blank = false;
                controller.newFile.fileHandle = fileList[0];
            }

            this.closeDialog = function (driveFile) {
                $mdDialog.hide(driveFile);
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
