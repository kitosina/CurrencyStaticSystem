var app = angular.module("CONVERTER",[]);

app.controller("CONVERTER_CONTROLLER",function($scope, $http){

    $scope.coupleCurrency = "";
    $scope.url = "/currency/actual/";
    $scope.inputValue = null;
    $scope.outputValue = null;
    $scope.nameUserForm = "";

    $scope.convertCurrency = function () {
        if (($scope.coupleCurrency !== "") && ($scope.inputValue !== null)){
            urlRequest = $scope.url + $scope.coupleCurrency;
            $http({
                url: urlRequest,
                method: "GET"
            }).then(function (response) {
                $scope.nameUserForm = $scope.coupleCurrency.split("/");
                $scope.outputValue = $scope.inputValue * response.data + " " + $scope.nameUserForm[1];
            })
        } else alert("Please input form");
    }
});
