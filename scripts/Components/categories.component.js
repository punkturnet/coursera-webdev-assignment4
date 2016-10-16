(function(){
  'use strict';
  angular.module('Data')
  .component('categories',
  {
    templateUrl: 'scripts/components/templates/categories.template.html',
    bindings: {
      items: '<'
    });

})();
