(function() {
    'use strict';

    angular
        .module('app')
        .service('produtoApi', Service)

    function Service($http) {
        var _getProdutos = function() {
            return $http.get('http://www.mocky.io/v2/582e2f05110000b61bd761ae');
        };

        var _produtoPadrao = function() {
            return [{
                codigo: '03',
                nome: 'Produto 03',
                preco: 44.34,
                data: new Date()
            }, {
                codigo: '04',
                nome: 'Produto 04',
                preco: 94.34,
                data: new Date()
            }];
        };

        return {
            getProdutos: _getProdutos,
            padrao: _produtoPadrao
        }
    }

}());