"use strict";
var core_1 = require('@angular/core');
var SocketIO = require('nativescript-socket.io');
var SocketService = (function () {
    function SocketService() {
        this.socketmsg$ = new core_1.EventEmitter();
    }
    SocketService.prototype.connect = function () {
        var questo = this;
        console.log(SocketIO);
        SocketIO.enableDebug();
        //var url="http://9.71.92.105:3000";
        var url = "http://tkdr.herokuapp.com";
        //var url="http://192.168.1.108:3000";
        //var url="http://tnssrv01.mybluemix.net";
        console.log("connecting to socket server at " + url);
        this.socket = SocketIO.connect(url, {
            log: true,
            secure: false
        });
        this.socket.on('connect', function (s) {
            console.log("SocketService: socket connected");
            console.log(JSON.stringify(s));
        });
        this.socket.on('getnickname', function (data) {
            console.log('SocketService: getnickname', JSON.stringify(data));
            //this.socket.id=data.sockid;
        });
        this.socket.on('chatmsg', function (data) {
            questo.socketmsg$.next(data);
            //console.log("chatmsg "+JSON.stringify(data));
        });
    };
    SocketService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], SocketService);
    return SocketService;
}());
exports.SocketService = SocketService;
//# sourceMappingURL=socket.service.js.map