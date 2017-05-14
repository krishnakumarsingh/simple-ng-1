var app = angular.module('app', ["ngRoute"]);
app.controller('MainCtrl', function MainCtrl() {
  this.hero = {
    name: 'Spawn'
  };
});
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "views/home.html"
    })
    .when("/order", {
        templateUrl : "views/order.html"
    })
    .when("/empty_cart", {
        templateUrl : "views/empty_cart.html"
    })
    .when("/shop", {
        templateUrl : "views/shop.html"
    });
});