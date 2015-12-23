angular.module('app')
.config(function ($routeProvider){
$routeProvider
.when('/', {controller: "ItemsCtrl", templateURL: 'items.html'})
.when('/login', {controller: "loginCtrl", templateURL: 'Login.html'})
.when('/register', {controller: "RegCtrl", templateURL: 'Reg.html'})
});
