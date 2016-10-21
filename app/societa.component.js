"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var SocietaComponent = (function () {
    function SocietaComponent(router, http, socketService, glb) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.socketService = socketService;
        this.glb = glb;
        this.counter = 16;
        this.stocaz = "stafuncia";
        this.societa = [];
        this.a = [];
        this.isLoading = false;
        this.listLoaded = false;
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
    }
    SocietaComponent.prototype.onLoad = function () {
        var _this = this;
        console.log("getting societa");
        this.isLoading = true;
        this.http.get(this.glb.rooturl + "/societa/findall")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.a = data.rows; }, function (err) { return _this.logError(err); }, function () { return _this.gotGare(); });
    };
    Object.defineProperty(SocietaComponent.prototype, "message", {
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
    SocietaComponent.prototype.onTap = function () {
        //this.getAtleti();
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    SocietaComponent.prototype.gotGare = function () {
        this.societa = this.a;
        //console.log(JSON.stringify(this.atleti));
        console.log(this.societa.length);
    };
    SocietaComponent.prototype.logError = function (err) {
        console.log("ERRORACCIO", err);
    };
    SocietaComponent.prototype.onSocketMsg = function (item) {
        // do something with added item
        console.log("gare - socketmsg from service !!", JSON.stringify(item));
    };
    SocietaComponent = __decorate([
        core_1.Component({
            selector: "my-societa",
            providers: [socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "societa.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], SocietaComponent);
    return SocietaComponent;
}());
exports.SocietaComponent = SocietaComponent;
//# sourceMappingURL=societa.component.js.map