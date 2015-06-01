'use strict';

/**
 * @ngdoc function
 * @name papeloteApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the papeloteApp
 */
angular.module('papeloteApp')
  .controller('MainCtrl', function ($scope, user) {
        var retorno = user.get();
        retorno.then(function(response){
                debugger;
        });
  });
