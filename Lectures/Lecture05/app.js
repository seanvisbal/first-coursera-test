(function () {
    'use strict';
    
        angular.module('myFirstApp', [])
    
        .controller('MyFirstController', function ($scope) {
            $scope.name = "Sean"; //<-- is in the scope of the controller
            $scope.sayHello = function () {
            return "Hello " + $scope.name;
            };
        });
    
    
    
    })();
/*
(function () {
        'use strict';
        
        angular.module('myFirstApp', [])
        
        .controller('MyFirstController', function ($scope) {
          $scope.name = "Sean";
          $scope.sayHello = function () {
            return "Hello Coursera!";
          };
        });
        
})(); */