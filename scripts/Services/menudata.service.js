(function(){
  'use strict';
  angular.module('Data')
  .service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService($http){
    var service = this;

    function GetAllCategories(){
      return $http({
        method: "GET",
        url: "http://davids-restaurant.herokuapp.com/categories.json"
      })
      .catch(function (error) {
        console.log("GetAllCategories - Something went terribly wrong. Error: " + error);
      });
    };
  }

  function GetItemsForCategory(categoryShortName){
    return $http({
      method: "GET",
      url: "http://davids-restaurant.herokuapp.com/menu_items.json?category=",
      params: { "category" : categoryShortName }
    }).catch(function (error) {
      console.log("GetItemsForCategory - Something went terribly wrong. Error: " + error);
    });
  };

})();
