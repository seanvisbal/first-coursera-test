(function () {
    'use strict';
  
    angular.module('NarrowItDownApp', [])
      .controller('NarrowItDownController', NarrowItDownController)
      .service('MenuSearchService', MenuSearchService)
      .directive('foundItems', FoundItems)
      .constant("ApiBasePath", "https://coursera-jhu-default-rtdb.firebaseio.com");
  
  
  
    function FoundItems() {
      return {
        templateUrl: 'foundItems.html',
        restrict: 'E',
        scope: {
          searchPerformed: "=",
          items: '<',
          onEmpty: '<',
        },
        controller: NarrowItDownController,
        controllerAs: 'list',
        bindToController: true
      };
    }
  
    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
      var menu = this;
  
      menu.items = [];
      menu.searchTerm = '';
      menu.searchPerformed = false;
  
      menu.getMatchedItems = function (searchTerm) {
        menu.searchPerformed = true;
        MenuSearchService.getMatchedMenuItems(searchTerm)
          .then(function (response) {
            menu.items = response;
          })
          .catch(function (error) {
            console.log("Error occurred: ", error);
          });
      };
  
      menu.removeItem = function (index) {
        menu.items.splice(index, 1);
      };
    }
  
    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
      var service = this;
  
      service.getMatchedMenuItems = function (searchTerm) {
        return $http({
          method: "GET",
          url: (ApiBasePath + "/menu_items.json")
        })
          .then(function (result) {
            var foundItems = [];
            for (var category in result.data) {
              if (result.data.hasOwnProperty(category)) {
                var menuItems = result.data[category]['menu_items'];
                for (var i = 0; i < menuItems.length; i++) {
                  if (searchTerm && searchTerm.length > 0 && menuItems[i]['description'].toLowerCase().indexOf(searchTerm) !== -1) {
                    foundItems.push(menuItems[i]);
                  }
                }
              }
            }
            return foundItems;
          })
      };
    }
  })();