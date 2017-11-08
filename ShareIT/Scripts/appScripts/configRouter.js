define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConfigRouter = (function () {
        function ConfigRouter() {
        }
        ;
        ConfigRouter.prototype.configure = function ($routeProvider, $locationProvider) {
            $routeProvider.when("/Register", {
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
        };
        return ConfigRouter;
    }());
    exports.ConfigRouter = ConfigRouter;
});
//# sourceMappingURL=configRouter.js.map