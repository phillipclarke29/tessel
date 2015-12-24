angular.module('app')
  .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
                 templateUrl : 'http://localhost:3000/items.html',
                 controller  : 'ItemsCtrl'
             })
});
