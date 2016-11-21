angular.module('app').directive('tableProduto', function() {
    return {
        restrict: 'E',
        scope: {
            produtos: '=value'
        },
        templateUrl: 'view/tableProduto.html'
    };
});