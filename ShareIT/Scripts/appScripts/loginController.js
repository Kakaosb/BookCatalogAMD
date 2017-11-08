define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LoginController = (function () {
        function LoginController($location, services, serviceClass) {
            this.serviceFactory = serviceClass;
            this.serviceFactory.assign(services);
            this.location = $location;
            this.loggedIn = false;
            this.message = "";
            this.user = {};
        }
        LoginController.prototype.login = function () {
            var _this = this;
            var self = this;
            this.serviceFactory.validateUser(this.user.userName, this.user.userPassword).then(function (response) {
                if (response.status === 200) {
                    _this.loggedIn = true;
                    _this.message = "";
                    _this.loggedInUser = response.data;
                }
            }).catch(function (response) {
                _this.loggedIn = false;
                _this.message = response.data.Message;
                if (response.data.ExceptionMessage)
                    _this.message += response.data.ExceptionMessage;
            });
            self.user = {};
        };
        ;
        LoginController.prototype.logout = function () {
            var self = this;
            this.loggedIn = false;
            this.message = "Вы вышли из системы";
            this.location.path("/");
            self.user = {};
        };
        ;
        LoginController.prototype.validate = function () {
            if (!this.loggedIn) {
                this.message = "Чтобы добавить книгу, необходимо зарегистрироваться";
                this.location.path("/");
            }
        };
        ;
        return LoginController;
    }());
    exports.LoginController = LoginController;
});
//# sourceMappingURL=loginController.js.map