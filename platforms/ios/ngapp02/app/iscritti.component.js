"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var IscrittiComponent = (function () {
    function IscrittiComponent() {
        this.iscritti = [];
        this.iscr = [];
    }
    IscrittiComponent.prototype.ngOnChanges = function (changes) {
        if (this.iscritti) {
            console.log("ngchanges", JSON.stringify(this.iscritti));
            for (var i = 0; i < this.iscritti.length; i++) {
                this.iscr.push(this.iscritti[i]);
            }
        }
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], IscrittiComponent.prototype, "iscritti", void 0);
    IscrittiComponent = __decorate([
        core_1.Component({
            selector: "iscritti",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "iscritti.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], IscrittiComponent);
    return IscrittiComponent;
}());
exports.IscrittiComponent = IscrittiComponent;
//# sourceMappingURL=iscritti.component.js.map