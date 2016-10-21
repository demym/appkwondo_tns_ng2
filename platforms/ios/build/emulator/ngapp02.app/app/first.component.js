"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var socket_service_1 = require('./socket.service');
var FirstComponent = (function () {
    function FirstComponent(socketService) {
        var _this = this;
        this.socketService = socketService;
        this.counter = 16;
        this.stocaz = "stocaz";
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
    }
    Object.defineProperty(FirstComponent.prototype, "message", {
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
    FirstComponent.prototype.onTap = function () {
        this.socketService.connect();
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    FirstComponent.prototype.onSocketMsg = function (item) {
        // do something with added item
        console.log("first - socketmsg from service !!", JSON.stringify(item));
    };
    FirstComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [router_1.NS_ROUTER_DIRECTIVES],
            providers: [socket_service_1.SocketService],
            templateUrl: "first.component.html",
        }), 
        __metadata('design:paramtypes', [socket_service_1.SocketService])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map