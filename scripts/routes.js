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
    controller: 'CategoriesController as catList',
    resolve: {
      items: ['MenuDataService', function (MenuDataService) {
        return MenuDataService.GetAllCategories;
      }]
    }
  })

  .state('items', {
    url: '/categories/{catId}/items',
    templateUrl: 'scripts/components/templates/items.template.html',
    controller: 'ItemsController as itemList',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService, $stateParams) {
        return MenuDataService.GetItemsForCategory($stateParams.catId);
      }]
    }
  });
}

})();
