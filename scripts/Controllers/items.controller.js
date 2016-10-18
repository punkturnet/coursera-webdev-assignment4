(function(){

  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'items', '$stateParams'];
  function ItemsController(MenuDataService, items, $stateParams){
    var itemList = this;
    itemList.items = items;
    console.log(items);
  }

})();
