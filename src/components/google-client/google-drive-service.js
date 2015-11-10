/**
 * Created by jandersen on 8/11/15.
 */
/*global angular: false, moment: false */

'use strict';

export var BASE_URI = 'https://www.googleapis.com/drive/v2';

export var hsDriveService = ['$http', '$q', '$log', '$window', '$mdDialog', 'hsAuthService', 'DRIVE_BASE_URI',
    function ($http, $q, $log, $window, $mdDialog, auth, baseUri) {

        const boundary = '-------314159265358979323846';
        const delimiter = "\r\n--" + boundary + "\r\n";
        const close_delim = "\r\n--" + boundary + "--";

        function getFileList() {
            var deferred = $q.defer();
            auth.getToken().then(function(token) {
                $http({
                    url: BASE_URI + '/files',
                    headers: { Authorization: 'Bearer ' + token },
                    params: {'query': name}
                }).then(function(resp) {
                    deferred.resolve(resp);
                },
                function(reason) {
                    deferred.reject(reason);
                });
            });
            

            return deferred.promise;
        }

        function chooseGoogleDriveDoc(evt) {
            return $mdDialog.show({
                //targetEvent: $event,
                templateUrl: 'components/google-client/drive-selection-dialog.html',
                controller: 'DriveSelectionCtrl',
                controllerAs: 'ctrl',
                bindToController: true,
                //onComplete: afterShowAnimation,
                locals: {
                    evt: evt
                }
            });
        }

        function buildMultiPartRequestBody(contentType, name, evtResourceId, fileContents) {

            var metadata = {
                'title': name,
                'mimeType': contentType,
                'properties': [
                    {
                        'key': 'hsp-event-id',
                        'value': evtResourceId
                    }
                ]
            };

            var base64Data = btoa(fileContents);
            return delimiter +
                'Content-Type: application/json\r\n\r\n' +
                JSON.stringify(metadata) +
                delimiter +
                'Content-Type: ' + contentType + '\r\n' +
                'Content-Transfer-Encoding: base64\r\n' +
                '\r\n' +
                base64Data +
                close_delim;
        }

        function insertFile(newFile) {

            const blankRTF = "{\\rtf1\\ansi\\ansicpg1252\\cocoartf1348\\cocoasubrtf170 {\\fonttbl\\f0\\fswiss\\fcharset0 Helvetica;} {\\colortbl;\\red255\\green255\\blue255;}\\margl1440\\margr1440\\vieww10800\\viewh8400\\viewkind0\\pard\\tx720\\tx1440\\tx2160\\tx2880\\tx3600\\tx4320\\tx5040\\tx5760\\tx6480\\tx7200\\tx7920\\tx8640\\pardirnatural\\f0\\fs24 \\cf0 }";

            var requestBodyPromise;
            if(newFile.blank) {
                requestBodyPromise = $q.when(buildMultiPartRequestBody(
                    'application/rtf',
                    newFile.title || newFile.evt.resource.summary || 'Blank',
                    newFile.evt.resource.id,
                    blankRTF
                ));
            } else {
                // use FileReader to load the file contents to upload
                var requestBodyDeferred = $q.defer();
                var reader = new FileReader();
                reader.onload = function(e) {
                    requestBodyDeferred.resolve(buildMultiPartRequestBody(
                        newFile.fileHandle.type || 'application/octet-stream',
                        newFile.title || newFile.fileHandle.name,
                        newFile.evt.resource.id,
                        reader.result
                    ));
                }
                requestBodyPromise = requestBodyDeferred.promise;
                reader.readAsBinaryString(newFile.fileHandle);
            }

            var deferred = $q.defer();
            requestBodyPromise.then(function(requestBody) {
                // we've got a request body... either from a blank file template or
                // from data from the filesystem
                auth.getToken().then(function(token) {
                    $http({
                        method: 'POST',
                        url: 'https://www.googleapis.com/upload/drive/v2/files',
                        params: {
                            uploadType: 'multipart',
                            convert: true
                        },
                        headers: { 
                            'Content-Type': 'multipart/mixed; boundary="' + boundary + '"',
                            Authorization: 'Bearer ' + token
                        },
                        data: requestBody
                    }).then(function(resp) {
                        var colleagues = auth.getUserData().colleagues || [],
                            editors = [{ email: newFile.evt.studentEmail, role: 'writer' }].concat(colleagues.map(function(colleague) {
                                return { email: colleague.email, role: 'writer' };
                            }));
    
                            ensurePermissions(resp.data, editors).then(
                                function(sharedFile) {
                                    deferred.resolve(sharedFile);
                                },
                                function(rejection) {
                                    deferred.reject(rejection);
                                });
                    },
                    function(reason) {
                        deferred.reject(reason);
                    });
                });
                
            }, function(requestBodyRejection) {
                deferred.reject(requestBodyRejection);
            });

            return deferred.promise;
        }

        function grantPermission(fileId, email, role) {
            role = role || 'writer';

            // ... now need to grant permission to the student
            var deferred = $q.defer();
            auth.getToken().then(function(token) {
                $http({
                    method: 'POST',
                    url: BASE_URI + '/files/' + fileId + '/permissions',
                    headers: { Authorization: 'Bearer ' + token },
                    params: {
                        sendNotificationEmails: false
                    },
                    data:  {
                        role: role,
                        type: 'user',
                        value: email
                    }
                }).then(function(permResp) {
                    // add the newly created permission into the newly
                    // created doc result
                    deferred.resolve(permResp.data);
    
                }, function(permRejection) {
                    // TODO: This is partially successful... need to think about how to handle
                    // this scenario
                    deferred.reject(permRejection);
                })
            });
            
            return deferred.promise;
        }

        /**
         * Ensure that a list of collaborators have permission to given file.
         * @param {FileResource} driveFile
         * @param {Array} collaborators
         * @return {Promise<event>}
         */
        function ensurePermissions(driveFile, collaborators) {
            var deferred = $q.defer();

            // ensure we've got a permissions array to work with
            if(!angular.isArray(driveFile.permissions)) {
                driveFile.permissions = [];
            }

            // filter out any existing permissions
            angular.forEach(driveFile.permissions, function(perm) {
               var matchingCollaborator = collaborators.find(function(cb) {
                   return cb.email.toLowerCase() == perm.emailAddress.toLowerCase() && cb.role === perm.role;
               });

               if(matchingCollaborator) {
                   collaborators.splice(collaborators.indexOf(matchingCollaborator), 1);
               }
            });

            if(collaborators.length > 0) {
                // doc has been created, now need to grant permission to the student
                grantPermission(driveFile.id, collaborators[0].email, collaborators[0].role).then(onPermGranted, onPermRejection);
            } else {
                deferred.resolve(driveFile);
            }

            function onPermGranted(permResult) {
                driveFile.permissions.push(permResult); // add the new permission
                collaborators.shift(); // advance to the next editor

                if(collaborators.length > 0) {
                    // grant permission to the next collaborator...
                    grantPermission(driveFile.id, collaborators[0].email, collaborators[0].role).then(onPermGranted, onPermRejection);
                } else {
                    // ...otherwise it's time to claim victory
                    deferred.resolve(driveFile);
                }
            }

            function onPermRejection(permRejection) {
                // TODO: This is partially successful... need to think about how to handle this scenario
                deferred.reject(permRejection);
            }

            return deferred.promise;
        }

        return {
            getFileList: getFileList,
            insertFile: insertFile,
            ensurePermissions: ensurePermissions,
            chooseGoogleDriveDoc: chooseGoogleDriveDoc
        };
    }];