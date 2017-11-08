"use strict";
import ng = angular;
import serviceModule = require("./serviceHandler");
import loginCtrlModule = require("./loginController");
import routerModule = require("./configRouter");
import regCtrlModule = require("./registerController");

export class mainControllers {
    constructor() {
        var app = angular.module("mainControllers", []);
        var router = new routerModule.ConfigRouter();
        app.config(router.configure);

        var serviceHandler = new serviceModule.serviceHandler();
        var serviceMod = app.factory("services", ["$http", serviceModule.exportService]);
        app.controller('MainController', ($location, services) => new loginCtrlModule.LoginController($location, services, serviceHandler));
        app.controller('RegisterController', ($scope, $location, services) => new regCtrlModule.RegisterController($scope, $location, serviceHandler));
    }
}