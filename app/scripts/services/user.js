'use strict';

/**
 * @ngdoc service
 * @name papeloteApp.user
 * @description
 * # user
 * Service in the papeloteApp.
 */
angular.module('papeloteApp')
    .service('user', function($resource, $q) {
        return {
            get: function() {
                var resource = $resource("http://localhost:3000/api/users");
                var deferred = $q.defer();

                resource.query(
                    function(data) {
                        return deferred.resolve(data);
                    },
                    function(response) {
                        return deferred.reject(response);
                    });

                return deferred.promise;
            }
        }
    });