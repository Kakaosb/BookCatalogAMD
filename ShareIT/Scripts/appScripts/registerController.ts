"use strict";
import ng = angular;
import serviceModule = require("./serviceHandler");
import loginCtrlModule = require("./loginController");

export class RegisterController {
    location: ng.ILocationService;
    user: any;
    serviceFactory: serviceModule.serviceHandler;
    parent: any;

    constructor($scope: ng.IScope, $location: ng.ILocationService, services: serviceModule.serviceHandler) {
        this.serviceFactory = services;
        this.location = $location;
        this.parent = $scope.$parent;

        this.user = {};
    }

    register(): void {
        const self = this;
        this.serviceFactory.registerUser(this.user).then(response => {
            if (response.status === 201) {
                this.parent.ctrl.message = "";
                this.location.path("/");
            }
        }).catch(response => {
            this.parent.ctrl.message = response.data.Message + ";" + response.data.ExceptionMessage;
        });
        self.user = {};
    };
}