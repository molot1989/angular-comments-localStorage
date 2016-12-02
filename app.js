angular.module('angularApp', ['ui.router','ngAnimate','comments'])
    .config(['$locationProvider','$stateProvider', function($locationProvider,$stateProvider) {
        $locationProvider.html5Mode(true);

        $stateProvider
            .state('home', {
                url: '/',
                template: '<comments></comments>'
            })
    }]);