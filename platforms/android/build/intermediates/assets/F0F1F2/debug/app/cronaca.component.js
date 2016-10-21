"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var CronacaComponent = (function () {
    function CronacaComponent() {
    }
    CronacaComponent = __decorate([
        core_1.Component({
            selector: "cronaca",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "cronaca.component.html",
            inputs: ['cronaca'],
        }), 
        __metadata('design:paramtypes', [])
    ], CronacaComponent);
    return CronacaComponent;
}());
exports.CronacaComponent = CronacaComponent;
//# sourceMappingURL=cronaca.component.js.map