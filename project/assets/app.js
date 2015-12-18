var app = angular.module('app', []);
 app.controller('ItemsCtrl', function ($scope, ItemsSvc) {

   $scope.addItem = function(){
     if($scope.itemBody){
      $http.post('/api/items', {
        model: $scope.itemModel,
        MID: $scope.itemMID,
        body: $scope.itemBody,
        price: $scope.itemPrice
      }).success(function(item){
        $scope.items.unshift({
        model: $scope.itemModel,
        MID: $scope.itemMID,
        body: $scope.itemBody,
        price: $scope.itemPrice
       })
      })
    }
  }

  ItemsSvc.fetch().success(function (items){

    $scope.items = items;

  })
});


 app.service('ItemsSvc', function($http){
   this.fetch = function (){

     return $http.get('api/items')

   };
 });
