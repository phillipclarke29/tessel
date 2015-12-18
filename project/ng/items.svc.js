app.service('ItemsSvc', function($http){
   this.fetch = function (){
     console.error('this is an error')

     return $http.get('api/items');
   };

    this.create = function(item) {
      return $http.post('/api/items', item);

    };
 });
