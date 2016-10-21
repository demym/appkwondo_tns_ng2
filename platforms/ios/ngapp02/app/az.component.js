"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var AzComponent = (function () {
    function AzComponent(http, socketService, globalsService) {
        this.http = http;
        this.socketService = socketService;
        this.globalsService = globalsService;
        this.chat = [];
        this.a = [];
        this.isLoading = false;
        //socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
    }
    AzComponent.prototype.onLoad = function () {
        var _this = this;
        console.log("getting chat");
        this.isLoading = true;
        this.http.get(this.globalsService.rooturl + "/chat/get")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.a = data.rows; }, function (err) { return _this.logError(err); }, function () { return _this.gotChat(); });
    };
    AzComponent.prototype.gotChat = function () {
        //console.log(JSON.stringify(this.atleti));
        for (var i = 0; i < this.a.length; i++) {
            this.a[i].isRight = false;
            if (this.a[i].nickname) {
                var lnick = this.a[i].nickname;
                if (lnick.toLowerCase() == "demy")
                    this.a[i].isRight = true;
            }
        }
        this.chat = this.a;
        console.log(this.chat.length + " messaggi di chat");
        console.log(JSON.stringify(this.chat));
    };
    AzComponent.prototype.logError = function (err) {
        console.log("ERRORACCIO", err);
    };
    AzComponent = __decorate([
        core_1.Component({
            selector: "my-chat",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "chat.component.html"
        }), 
        __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], AzComponent);
    return AzComponent;
}());
exports.AzComponent = AzComponent;
//# sourceMappingURL=az.component.js.map