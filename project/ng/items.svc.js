app.service('ItemsSvc', function($http){
   this.fetch = function (){
     return $http.get('api/items');
   };

    this.create = function(item) {
      return $http.post('/api/items', item);

    };
 });
