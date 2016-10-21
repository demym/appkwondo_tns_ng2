"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var MatchesForAtletaComponent = (function () {
    function MatchesForAtletaComponent(route, glb) {
        this.glb = glb;
        this.matchesforatleta = [];
        this.atletaname = "";
        this.atletaid = "";
        this.matchesforatleta = JSON.parse(route.snapshot.params['mba']); // 3
        this.atletaid = route.snapshot.params['atletaid']; // 3
        var atl = glb.getAtletaById(this.atletaid);
        this.atletaname = atl.cognome + " " + atl.nome;
        this.route = route;
        console.log(JSON.stringify(this.matchesforatleta));
    }
    MatchesForAtletaComponent.prototype.ngOnChanges = function (changes) {
        // this.matchesforatleta = this.route.snapshot.params['mba']; // 3
        // console.log(JSON.stringify(this.matchesforatleta));
    };
    MatchesForAtletaComponent = __decorate([
        core_1.Component({
            selector: "matchesforatleta",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "matchesforatleta.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, globals_service_1.GlobalsService])
    ], MatchesForAtletaComponent);
    return MatchesForAtletaComponent;
}());
exports.MatchesForAtletaComponent = MatchesForAtletaComponent;
//# sourceMappingURL=matchesforatleta.component.js.map