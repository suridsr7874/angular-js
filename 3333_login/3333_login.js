

let app = angular.module('appmodule',[]);

// Create Controller
app.controller('suri',function($scope) {
    $scope.username = null;
    $scope.email = null;
    $scope.password = null;
    $scope.check = null;
});