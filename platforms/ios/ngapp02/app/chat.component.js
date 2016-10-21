"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var ChatComponent = (function () {
    function ChatComponent(http, socketService, globalsService) {
        var _this = this;
        this.http = http;
        this.socketService = socketService;
        this.globalsService = globalsService;
        this.counter = 16;
        this.stocaz = "stafuncia";
        this.chat = [];
        this.a = [];
        this.isLoading = false;
        this.listLoaded = false;
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
    }
    ChatComponent.prototype.onLoad = function () {
        var _this = this;
        console.log("getting gare");
        this.isLoading = true;
        this.http.get(this.globalsService.rooturl + "/chat/get")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.a = data.rows; }, function (err) { return _this.logError(err); }, function () { return _this.gotChat(); });
    };
    ChatComponent.prototype.gotChat = function () {
        this.chat = this.a;
        //console.log(JSON.stringify(this.atleti));
        console.log(this.chat.length + " chat messages");
    };
    ChatComponent.prototype.logError = function (err) {
        console.log("ERRORACCIO", err);
    };
    ChatComponent.prototype.onSocketMsg = function (item) {
        // do something with added item
        console.log("chat - socketmsg from service !!", JSON.stringify(item));
    };
    ChatComponent = __decorate([
        core_1.Component({
            selector: "my-chat",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "chat.component.html",
        }), 
        __metadata('design:paramtypes', [http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], ChatComponent);
    return ChatComponent;
}());
exports.ChatComponent = ChatComponent;
//# sourceMappingURL=chat.component.js.map