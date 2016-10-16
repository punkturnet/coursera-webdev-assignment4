(function(){
  'use strict';
  angular.module('Data')
  .service('MenuData', MenuDataService);

  MenuDataService.$inject = ['$http'];
  function MenuDataService('$http'){

    function GetAllCategories(){

    }

    function GetItemsForCategory(categoryShortName){

    }
    
  }

})();
