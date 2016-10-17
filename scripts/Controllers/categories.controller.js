(function(){

  'use strict';
  angular.module('MenuApp')
  .controller('CategoriesController', CategoriesController);
  
  CategoriesController.$inject = ['Data'];
  function CategoriesController(Data){
    var ctrl = this;
    console.log(Data);
    crtl.items = [];


  }

})();
