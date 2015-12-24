angular.module('app')
  .config(function ($routeProvider) {
  $routeProvider
  .when('/', {
                 templateUrl : 'items.html',
                 controller  : 'ItemsCtrl'
             })
});
