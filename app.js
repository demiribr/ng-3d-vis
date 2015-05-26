'use strict';

angular.module('ngWebglDemo', [])

  .controller('AppCtrl', ['$scope', function ($scope) {

    $scope.canvasWidth = 400;
    $scope.canvasHeight = 400;
    $scope.dofillcontainer = false;
    $scope.scale = 1;
    $scope.materialType = 'lambert';

  }]);