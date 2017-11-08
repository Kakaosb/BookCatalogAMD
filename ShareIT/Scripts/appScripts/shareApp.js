"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainCtrlsModule = require("./mainControllers");
var shareApp = (function () {
    function shareApp() {
        var ngApp = angular.module('shareApp', ["ngRoute", "ngSanitize", "ui.bootstrap", "mainControllers"]);
        var mainCtrls = new mainCtrlsModule.mainControllers();
    }
    return shareApp;
}());
exports.shareApp = shareApp;
//# sourceMappingURL=shareApp.js.map