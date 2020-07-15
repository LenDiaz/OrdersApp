"use strict"

angular.module("myOrdersApp")
.config(function ($locationProvider, $routeProvider) {
    $locationProvider.html5Mode(true);

    $routeProvider.
    when("/order", {
        template: "<order-list></order-list>",
    }).
    when("/", {
        templateUrl: "app/app.component.html",
    }).otherwise({
        redirectTo: "/"
    });
});