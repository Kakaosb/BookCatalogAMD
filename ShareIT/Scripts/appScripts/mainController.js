"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mainControllers = (function () {
    function mainControllers() {
        var app = angular.module("mainControllers", []);
        app.controller('MainController', function ($scope, $location) {
            $scope.name = "Olivia";
            $scope.lastName = "Kakao";
        });
    }
    return mainControllers;
}());
exports.mainControllers = mainControllers;
//# sourceMappingURL=mainController.js.map