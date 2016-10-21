"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
var globals = require('./globals'); //<==== this one
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var AtletiComponent = (function () {
    function AtletiComponent(router, http, socketService, globalsService) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.socketService = socketService;
        this.globalsService = globalsService;
        this.counter = 16;
        this.stocaz = "stafuncia";
        this.atleti = [];
        this.a = [];
        this.isLoading = false;
        this.listLoaded = false;
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
    }
    AtletiComponent.prototype.onLoad = function () {
        console.log("getting atleti");
        this.isLoading = true;
        this.atleti = globals.atleti;
        console.log("atleti in atleti", this.atleti.length);
    };
    Object.defineProperty(AtletiComponent.prototype, "message", {
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
    AtletiComponent.prototype.onTap = function () {
        //this.getAtleti();
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    AtletiComponent.prototype.gotAtleti = function () {
        this.atleti = this.a;
        //console.log(JSON.stringify(this.atleti));
        console.log(this.atleti.length);
    };
    AtletiComponent.prototype.logError = function (err) {
        console.log("ERRORACCIO", err);
    };
    AtletiComponent.prototype.onSocketMsg = function (item) {
        // do something with added item
        console.log("atleti - socketmsg from service !!", JSON.stringify(item));
    };
    AtletiComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService],
            templateUrl: "atleti.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], AtletiComponent);
    return AtletiComponent;
}());
exports.AtletiComponent = AtletiComponent;
//# sourceMappingURL=atleti.component.js.map