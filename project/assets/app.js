var app = angular.module('app', []);
 app.controller('ItemsCtrl', function ($scope, $http) {

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

    $http.get('http://localhost:3000/api/items')
      .success(function (items) {
        $scope.items = items
      })
});
