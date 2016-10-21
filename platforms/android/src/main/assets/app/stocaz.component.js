"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var StocazComponent = (function () {
    function StocazComponent() {
    }
    StocazComponent = __decorate([
        core_1.Component({
            selector: "stocaz",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "cronaca.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], StocazComponent);
    return StocazComponent;
}());
exports.StocazComponent = StocazComponent;
//# sourceMappingURL=stocaz.component.js.map