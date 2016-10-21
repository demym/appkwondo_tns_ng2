"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var http_1 = require('@angular/http');
var globals_service_1 = require('./globals.service');
var AppComponent = (function () {
    function AppComponent(glb) {
        this.glb = glb;
        this.counter = 16;
        this.stocaz = "stocaz";
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                return this.counter + " taps left";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [http_1.HTTP_PROVIDERS, globals_service_1.GlobalsService],
            //templateUrl: "app.component.html",
            template: "<page-router-outlet></page-router-outlet>"
        }), 
        __metadata('design:paramtypes', [globals_service_1.GlobalsService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map