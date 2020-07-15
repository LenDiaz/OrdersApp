const OrdersController = function($scope) {

            $scope.sortBy = 'name';
            $scope.reverse = false;

            $scope.orders= [
                {name:'Dean', city:'New York', orderTotal:199, date: '2020-01-20'},
                {name:'Samwell', city:'Ohio', orderTotal:38.99, date: '2020-01-27'},
                {name:'Baby', city:'Illinois', orderTotal:19.58, date: '2020-05-07'},
                 {name:'Dale', city:'Minnesota', orderTotal:15, date: '2020-02-15'},
                {name:'Lanie', city:'California', orderTotal:88, date: '2020-07-15'}];


            $scope.doSort = function (propName)  {
                    $scope.sortBy = propName;
                    $scope.reverse = !$scope.reverse;
            };
    };
