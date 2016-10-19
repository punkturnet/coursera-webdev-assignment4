(function(){
  'use strict';
  angular.module('DataMod')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;

     service.GetAllCategories = function(){
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/categories.json"
      }).then(function(result){
        return result.data;
      })
      .catch(function (error) {
        console.log("GetAllCategories - Something went terribly wrong. Error: " + error);
      });
    };


    service.GetItemsForCategory = function(categoryShortName){
      return $http({
        method: "GET",
        url: "https://davids-restaurant.herokuapp.com/menu_items.json?category=",
        params: { "category" : categoryShortName }
      }).then(function(result){
        return result.data;
      })
      .catch(function (error) {
        console.log("GetItemsForCategory - Something went terribly wrong. Error: " + error);
      });
    };
  }
})();
