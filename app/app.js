(function (){

    var app = angular.module("myOrdersApp", ["ngRoute"]);
    app.config(function($routeProvider) {
        $routeProvider
                .when ("/",
            {
                    controller:'OrdersController',
                    templateUrl: 'app/views/orders.html'
            })
            .otherwise({redirectTo: '/'});
    });
}());
