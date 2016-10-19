(function(){

  'use strict';
  angular.module('MenuApp')
  .controller('ItemsController', ItemsController);

  ItemsController.$inject = ['MenuDataService', 'items', '$stateParams'];
  function ItemsController(MenuDataService, items, $stateParams){
    var itemList = this;
    itemList.category = items.category;
    itemList.items = items.menu_items;
  }

})();
