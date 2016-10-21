"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var MatchesByProgComponent = (function () {
    function MatchesByProgComponent() {
    }
    MatchesByProgComponent = __decorate([
        core_1.Component({
            selector: "matchesbyprog",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "matchesbyprog.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], MatchesByProgComponent);
    return MatchesByProgComponent;
}());
exports.MatchesByProgComponent = MatchesByProgComponent;
//# sourceMappingURL=matchesbyprog.component copy.js.map