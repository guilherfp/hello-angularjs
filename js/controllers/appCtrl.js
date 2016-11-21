angular.module('app').controller('appCtrl', function($scope, produtoApi) {

    $scope.text = 'Hello World';
    $scope.produtos2 = produtoApi.padrao();
    $scope.produtos = [];

    var init = function() {
        produtoApi.getProdutos().success(function(data) {
            $scope.produtos = data;
        }).error(function(data, status) {
            console.log(data);
        });
    };


    $scope.adicionar = function(produto) {
        produto.data = new Date();
        $scope.produtos.push(angular.copy(produto));
        $scope.produto = null;
    };

    init();
});