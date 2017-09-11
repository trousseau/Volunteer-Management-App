var app = angular.module('myApp', ["ngRoute", 'angularModalService','ngTableToCsv']);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        controller: "volCtrl",
        templateUrl: "app/components/volunteers/volunteers.html"
    })

    .when("/volunteers", {
        controller: "volCtrl",
        templateUrl: "app/components/volunteers/volunteers.html"

    });
});