var app=angular.module("app",["ngRoute"]);app.controller("ItemsCtrl",["$scope","ItemsSvc",function(t,e){t.addItem=function(){t.itemBody&&e.create({model:t.itemModel,MID:t.itemMID,body:t.itemBody,price:t.itemPrice}).success(function(e){t.items.unshift({model:t.itemModel,MID:t.itemMID,body:t.itemBody,price:t.itemPrice})})},e.fetch().success(function(e){t.items=e})}]),app.service("ItemsSvc",["$http",function(t){this.fetch=function(){return t.get("api/items")},this.create=function(e){return t.post("/api/items",e)}}]),angular.module("app").config(["$routeProvider",function(t){t.when("/",{templateUrl:"http://localhost:3000/items.html",controller:"ItemsCtrl"})}]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1vZHVsZS5qcyIsIml0ZW1zLmN0cmwuanMiLCJpdGVtcy5zdmMuanMiLCJyb3V0ZXMuanMiXSwibmFtZXMiOlsiYXBwIiwiYW5ndWxhciIsIm1vZHVsZSIsImNvbnRyb2xsZXIiLCIkc2NvcGUiLCJJdGVtc1N2YyIsImFkZEl0ZW0iLCJpdGVtQm9keSIsImNyZWF0ZSIsIm1vZGVsIiwiaXRlbU1vZGVsIiwiTUlEIiwiaXRlbU1JRCIsImJvZHkiLCJwcmljZSIsIml0ZW1QcmljZSIsInN1Y2Nlc3MiLCJpdGVtIiwiaXRlbXMiLCJ1bnNoaWZ0IiwiZmV0Y2giLCJzZXJ2aWNlIiwiJGh0dHAiLCJ0aGlzIiwiZ2V0IiwicG9zdCIsImNvbmZpZyIsIiRyb3V0ZVByb3ZpZGVyIiwid2hlbiIsInRlbXBsYXRlVXJsIl0sIm1hcHBpbmdzIjoiQUFBQSxHQUFBQSxLQUFBQyxRQUFBQyxPQUFBLE9BQ0EsV0NEQUYsS0FBQUcsV0FBQSxhQUFBLFNBQUEsV0FBQSxTQUFBQyxFQUFBQyxHQUVBRCxFQUFBRSxRQUFBLFdBQ0FGLEVBQUFHLFVBQ0FGLEVBQUFHLFFBQ0FDLE1BQUFMLEVBQUFNLFVBQ0FDLElBQUFQLEVBQUFRLFFBQ0FDLEtBQUFULEVBQUFHLFNBQ0FPLE1BQUFWLEVBQUFXLFlBQ0FDLFFBQUEsU0FBQUMsR0FDQWIsRUFBQWMsTUFBQUMsU0FDQVYsTUFBQUwsRUFBQU0sVUFDQUMsSUFBQVAsRUFBQVEsUUFDQUMsS0FBQVQsRUFBQUcsU0FDQU8sTUFBQVYsRUFBQVcsZUFNQVYsRUFBQWUsUUFBQUosUUFBQSxTQUFBRSxHQUVBZCxFQUFBYyxNQUFBQSxPQ3RCQWxCLElBQUFxQixRQUFBLFlBQUEsUUFBQSxTQUFBQyxHQUNBQyxLQUFBSCxNQUFBLFdBQ0EsTUFBQUUsR0FBQUUsSUFBQSxjQUdBRCxLQUFBZixPQUFBLFNBQUFTLEdBQ0EsTUFBQUssR0FBQUcsS0FBQSxhQUFBUixPQ05BaEIsUUFBQUMsT0FBQSxPQUNBd0IsUUFBQSxpQkFBQSxTQUFBQyxHQUNBQSxFQUNBQyxLQUFBLEtBQ0FDLFlBQUEsbUNBQ0ExQixXQUFBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciBhcHAgPSBhbmd1bGFyLm1vZHVsZSgnYXBwJywgW1xuICAnbmdSb3V0ZSdcbl0pO1xuIiwiYXBwLmNvbnRyb2xsZXIoJ0l0ZW1zQ3RybCcsIGZ1bmN0aW9uICgkc2NvcGUsIEl0ZW1zU3ZjKSB7XG5cbiAgJHNjb3BlLmFkZEl0ZW0gPSBmdW5jdGlvbigpe1xuICAgIGlmKCRzY29wZS5pdGVtQm9keSl7XG4gICBJdGVtc1N2Yy5jcmVhdGUoe1xuICAgICAgIG1vZGVsOiAkc2NvcGUuaXRlbU1vZGVsLFxuICAgICAgIE1JRDogJHNjb3BlLml0ZW1NSUQsXG4gICAgICAgYm9keTogJHNjb3BlLml0ZW1Cb2R5LFxuICAgICAgIHByaWNlOiAkc2NvcGUuaXRlbVByaWNlXG4gICAgIH0pLnN1Y2Nlc3MoZnVuY3Rpb24oaXRlbSl7XG4gICAgICAgJHNjb3BlLml0ZW1zLnVuc2hpZnQoe1xuICAgICAgIG1vZGVsOiAkc2NvcGUuaXRlbU1vZGVsLFxuICAgICAgIE1JRDogJHNjb3BlLml0ZW1NSUQsXG4gICAgICAgYm9keTogJHNjb3BlLml0ZW1Cb2R5LFxuICAgICAgIHByaWNlOiAkc2NvcGUuaXRlbVByaWNlXG4gICAgICB9KVxuICAgICB9KVxuICAgfVxuIH1cblxuIEl0ZW1zU3ZjLmZldGNoKCkuc3VjY2VzcyhmdW5jdGlvbiAoaXRlbXMpe1xuXG4gICAkc2NvcGUuaXRlbXMgPSBpdGVtcztcblxuIH0pXG59KTtcbiIsImFwcC5zZXJ2aWNlKCdJdGVtc1N2YycsIGZ1bmN0aW9uKCRodHRwKXtcbiAgIHRoaXMuZmV0Y2ggPSBmdW5jdGlvbiAoKXtcbiAgICAgcmV0dXJuICRodHRwLmdldCgnYXBpL2l0ZW1zJyk7XG4gICB9O1xuXG4gICAgdGhpcy5jcmVhdGUgPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICByZXR1cm4gJGh0dHAucG9zdCgnL2FwaS9pdGVtcycsIGl0ZW0pO1xuXG4gICAgfTtcbiB9KTtcbiIsImFuZ3VsYXIubW9kdWxlKCdhcHAnKVxuICAuY29uZmlnKGZ1bmN0aW9uICgkcm91dGVQcm92aWRlcikge1xuICAkcm91dGVQcm92aWRlclxuICAud2hlbignLycsIHtcbiAgICAgICAgICAgICAgICAgdGVtcGxhdGVVcmwgOiAnaHR0cDovL2xvY2FsaG9zdDozMDAwL2l0ZW1zLmh0bWwnLFxuICAgICAgICAgICAgICAgICBjb250cm9sbGVyICA6ICdJdGVtc0N0cmwnXG4gICAgICAgICAgICAgfSlcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
