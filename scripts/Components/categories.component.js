(function(){
  'use strict';
  angular.module('MenuApp')
  .component('categories',
  {
    templateUrl: 'scripts/components/templates/categories.template.html',
    bindings: {
      items: '<'
    }
  });

})();
