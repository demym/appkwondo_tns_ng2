"use strict";
var core_1 = require("@angular/core");
var router_1 = require('nativescript-angular/router');
var router_2 = require('@angular/router');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
var FirstComponent = (function () {
    function FirstComponent(socketService, glb, router) {
        var _this = this;
        this.socketService = socketService;
        this.glb = glb;
        this.router = router;
        this.counter = 16;
        this.stocaz = "stocaz";
        this.menu = [
            {
                name: "ChatKwonDo",
                path: "/chat"
            },
            {
                name: "Atleti",
                path: "/atleti"
            },
            {
                name: "Gare",
                path: "/gare"
            },
            {
                name: "Società",
                path: "/societa"
            }
        ];
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
        glb.getAtleti(function () {
        });
    }
    FirstComponent.prototype.onItemTap = function (args) {
        console.log(args);
        console.log(args.index);
        //alert(args.name+" - "+args.path);
        this.router.navigate([this.menu[args.index].path]);
    };
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
            providers: [socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "first.component.html",
        }), 
        __metadata('design:paramtypes', [socket_service_1.SocketService, globals_service_1.GlobalsService, router_2.Router])
    ], FirstComponent);
    return FirstComponent;
}());
exports.FirstComponent = FirstComponent;
//# sourceMappingURL=first.component.js.map