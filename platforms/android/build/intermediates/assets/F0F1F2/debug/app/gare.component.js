"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var GareComponent = (function () {
    function GareComponent(router, http, socketService, glb) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.socketService = socketService;
        this.glb = glb;
        this.counter = 16;
        this.stocaz = "stafuncia";
        this.gare = [];
        this.a = [];
        this.isLoading = false;
        this.listLoaded = false;
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
    }
    GareComponent.prototype.onItemTap = function (args) {
        console.log(args.index);
        this.router.navigate(['/gara', { garaid: this.gare[args.index].doc.id }]);
    };
    GareComponent.prototype.onLoad = function () {
        var _this = this;
        console.log("getting gare");
        this.isLoading = true;
        this.http.get(this.glb.rooturl + "/gare/findall")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.a = data.rows; }, function (err) { return _this.logError(err); }, function () { return _this.gotGare(); });
    };
    Object.defineProperty(GareComponent.prototype, "message", {
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
    GareComponent.prototype.onTap = function () {
        //this.getAtleti();
        this.counter--;
        this.stocaz = "ma vaffanculo " + this.counter;
        if (this.counter == 0)
            this.stocaz = "hai finito coglione";
    };
    GareComponent.prototype.onLongPress = function () {
        //this.getAtleti();
        alert("longpress");
    };
    GareComponent.prototype.gotGare = function () {
        this.gare = this.a;
        //console.log(JSON.stringify(this.atleti));
        console.log(this.gare.length);
    };
    GareComponent.prototype.logError = function (err) {
        console.log("ERRORACCIO", err);
    };
    GareComponent.prototype.onSocketMsg = function (item) {
        // do something with added item
        console.log("gare - socketmsg from service !!", JSON.stringify(item));
    };
    GareComponent = __decorate([
        core_1.Component({
            selector: "my-gare",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "gare.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.Router, http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], GareComponent);
    return GareComponent;
}());
exports.GareComponent = GareComponent;
//# sourceMappingURL=gare.component.js.map