(function (){
    'use strict';
 
    angular.module('LunchApp', [])
    .controller('LunchController', LunchController);

    LunchController.$inject = ['$scope'];
    function LunchController($scope) {
        $scope.items = "";
        $scope.message = "";

        $scope.checkIfTooMuch = function() {
            // split items by comma and remove any empty or whitespace-only items
            var itemsArray = $scope.items.split(",").filter(function(item) {
                return item.trim() !== "";
            });

            // check number of items and set message accordingly
            if (itemsArray.length === 0) {
                $scope.message = "Please enter data first";
            } else if (itemsArray.length <= 3) {
                $scope.message = "Enjoy!";
            } else {
                $scope.message = "Too much!";
            }
        };
    }
 
})();





