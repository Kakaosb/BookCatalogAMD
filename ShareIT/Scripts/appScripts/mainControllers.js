"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var serviceModule = require("./serviceHandler");
var loginCtrlModule = require("./loginController");
var routerModule = require("./configRouter");
var regCtrlModule = require("./registerController");
var mainControllers = (function () {
    function mainControllers() {
        var app = angular.module("mainControllers", []);
        var router = new routerModule.configRouter();
        app.config(router.configure);
        var serviceHandler = new serviceModule.serviceHandler();
        var serviceMod = app.factory("services", ["$http", serviceModule.exportService]);
        app.controller('MainController', function ($location, services) { return new loginCtrlModule.loginController($location, services, serviceHandler); });
        app.controller('RegisterController', function ($scope, $location, services) { return new regCtrlModule.registerController($scope, $location, serviceHandler); });
    }
    return mainControllers;
}());
exports.mainControllers = mainControllers;
//# sourceMappingURL=mainControllers.js.map