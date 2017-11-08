"use strict";
import ng = angular;
import ngr = angular.route;
export class ConfigRouter {
    constructor() {
    };

    public configure($routeProvider: ngr.IRouteProvider, $locationProvider: ng.ILocationProvider): void {
        $routeProvider.when("/Register",
            {
                templateUrl: "PartialViews/Register.html",
                controller: "RegisterController"
            }).when("/Books", {
                templateUrl: "PartialViews/Books.html",
                controller: "BookController"
            }).otherwise({
                redirectTo: "/"
            });

        $locationProvider.html5Mode({
            enabled: true,
            requireBase: false
        });
    }
}