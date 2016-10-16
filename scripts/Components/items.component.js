(function(){
  'use strict';
  angular.module('Data')
  .component('items',
  {
    templateUrl: 'scripts/components/templates/items.template.html',
    bindings: {
      items: '<'
    });

})();
