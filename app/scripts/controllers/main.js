'use strict';

/**
 * @ngdoc function
 * @name firstYeomanAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the firstYeomanAppApp
 */
angular.module('firstYeomanAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function () {
  		$scope.todos.push($scope.todo);
  		$scope.todo = '';
};
  });