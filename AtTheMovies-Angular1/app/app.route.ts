
import {app} from './app.module';
import router = require("angular-ui-router");



routes.$inject = [
        '$stateProvider',
        '$locationProvider',
        '$urlRouterProvider'
    ];


export function routes ($stateProvider: ng.ui.IStateProvider,
                $locationProvider: ng.ILocationProvider,  
                $urlProvider: ng.ui.IUrlRouterProvider) {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    
    $stateProvider.state({
        name: "movies",
        url: '/movies',
        template: '<movielist></movielist>'
    })
    $stateProvider.state({
        name: "movie",
        url: '/movie/:movieId',
        template: '<movie></movie>'
    })
    $stateProvider.state({
        name: "reviews",
        url: '/:movieId',
        parent: "movie",
        template: '<moviereviews></moviereviews>'
    })
    $stateProvider.state({
        name: "purchase",
        parent: "movie",
        template: '<moviepurchase></moviepurchase>'
    })
    $stateProvider.state({
        name: "review",
        parent: "movie",
        template: '<moviereview></moviereview>'
    });

  
    $urlProvider.otherwise("/movies");

} 

app.config(routes);


