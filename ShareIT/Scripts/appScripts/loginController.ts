"use strict";
import ng = angular;
import serviceModule = require("./serviceHandler");

export class LoginController {
    location: ng.ILocationService;
    loggedIn: boolean;
    message: string;
    user: any;
    serviceFactory: serviceModule.serviceHandler;
    loggedInUser: any;

    constructor($location: ng.ILocationService, services: any, serviceClass: serviceModule.serviceHandler) {
        this.serviceFactory = serviceClass;
        this.serviceFactory.assign(services);
        this.location = $location;
        this.loggedIn = false;
        this.message = "";

        this.user = {};
    }

    login(): void {
        const self = this;
        this.serviceFactory.validateUser(this.user.userName, this.user.userPassword).then(response => {
            if (response.status === 200) {
                this.loggedIn = true;
                this.message = "";
                this.loggedInUser = response.data;
            }
        }).catch(response => {
            this.loggedIn = false;
            this.message = response.data.Message;
            if (response.data.ExceptionMessage)
                this.message += response.data.ExceptionMessage;
        });
        self.user = {};
    };

    logout(): void {
        const self = this;
        this.loggedIn = false;
        this.message = "Вы вышли из системы";
        this.location.path("/");
        self.user = {};
    };

    validate(): void {
        if (!this.loggedIn) {
            this.message = "Чтобы добавить книгу, необходимо зарегистрироваться";
            this.location.path("/");
        }
    };
}