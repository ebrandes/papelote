'use strict';

/**
 * @ngdoc function
 * @name papeloteApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the papeloteApp
 */
angular.module('papeloteApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
