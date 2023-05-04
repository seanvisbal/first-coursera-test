(function (){
'use strict';

angular.module('NameCalculator', [])

.controller('NameCalculatorController', function ($scope){
    $scope.name = "";
    $scope.totalValue = 0;

    $scope.displayNumeric = function () {
      var totalNameValue = //it will be save in the totalNameValue variable
      calculateNumericForString($scope.name); //once it calculated the name using the function created below
      $scope.totalValue = totalNameValue;  //and it will copy and update the scope  
    };

    function calculateNumericForString(string) { //function for calculating
        var totalStringValue = 0; //starting point of computation which is zero
        for (var i = 0; i < string.length; i++) {
            totalStringValue += string.charCodeAt(i);
        }
            return totalStringValue;
    }
});





})();