(function (){
'use strict';

angular.module('MsgApp', [])
.controller('MsgController', MsgController);

MsgController.$inject = ['$scope'];
function MsgController($scope) {
    $scope.name = "Sean";
    $scope.stateOfBeing = "hungry";


    $scope.sayMessage = function () {
        return "Sean likes to eat";
    };

    $scope.feedYaakov = function () {
        $scope.stateOfBeing = "fed";
    };
}



})();