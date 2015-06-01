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
                var resource = $resource("http://localhost:3000/users");
                var deferred = $q.defer();

                resource.get(
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