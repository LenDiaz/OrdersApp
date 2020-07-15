
angular.module("orderList").
        component('orderList',{
            templateURL: "app/views/orders.html",
            controller: ($scope) => {
                $scope.name = "world";
                $scope.testClick = () => {
                    console.log("clicked");
                }
            }
        }
    );

       
