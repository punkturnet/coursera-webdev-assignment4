(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'scripts/components/templates/home.template.html'
  })

  // Premade list page
  .state('categories', {
    url: '/categories',
    templateUrl: 'scripts/components/templates/categories.template.html',
    controller: 'CategoriesController as catList'
  })

  .state('items', {
    url: '/categories/{categoryId}/items',
    templateUrl: 'scripts/components/templates/items.template.html',
    controller: 'ItemsController as itemList'
  });
}

})();
