define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var RegisterController = (function () {
        function RegisterController($scope, $location, services) {
            this.serviceFactory = services;
            this.location = $location;
            this.parent = $scope.$parent;
            this.user = {};
        }
        RegisterController.prototype.register = function () {
            var _this = this;
            var self = this;
            this.serviceFactory.registerUser(this.user).then(function (response) {
                if (response.status === 201) {
                    _this.parent.ctrl.message = "";
                    _this.location.path("/");
                }
            }).catch(function (response) {
                _this.parent.ctrl.message = response.data.Message + ";" + response.data.ExceptionMessage;
            });
            self.user = {};
        };
        ;
        return RegisterController;
    }());
    exports.RegisterController = RegisterController;
});
//# sourceMappingURL=registerController.js.map