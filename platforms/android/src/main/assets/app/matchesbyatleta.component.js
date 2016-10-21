"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
var router_1 = require('@angular/router');
require('rxjs/add/operator/map');
var router_2 = require("@angular/router");
var MatchesByAtletaComponent = (function () {
    function MatchesByAtletaComponent(route, router) {
        this.mba = [];
        this.matchesbyatleta = [];
        this.router = router;
    }
    MatchesByAtletaComponent.prototype.ngOnChanges = function (changes) {
        //this.mbp[0].doc.matchid="999";
        //console.log("ngOnChanges",JSON.stringify(this.mba));
        if (this.mba) {
            //console.log(JSON.stringify(this.mba));
            this.matchesbyatleta = [];
            for (var i = 0; i < this.mba.length; i++) {
                var m = this.mba[i];
                m.imgurl = "~/img/matchnoplay.png";
                var medaglia = "none";
                if (m.matchesarray) {
                    for (var j = 0; j < m.matchesarray.length; j++) {
                        var ma = m.matchesarray[j];
                        if (ma.dadisputare == "yes") {
                            ma.mclass = "nondisputato";
                            if (ma.disputato == "yes") {
                                ma.mclass = "perso";
                                if (ma.medagliamatch != "none")
                                    medaglia = ma.medagliamatch;
                                if (ma.vinto == "yes")
                                    ma.mclass = "vinto";
                            }
                        }
                        else
                            ma.mclass = "danondisputare";
                    }
                }
                if (medaglia != "none")
                    m.imgurl = "~/img/medaglia_" + medaglia + ".png";
                // console.log(m.imgurl);
                this.matchesbyatleta.push(this.mba[i]);
            }
        }
        /*
        
                  */
        // changes.prop contains the old and the new value...
    };
    MatchesByAtletaComponent.prototype.matchTap = function (args) {
        console.log(args.index);
        var match = this.matchesbyatleta[args.index];
        var atlid = match.atletaid;
        var garaid = this.garaid;
        console.log("garaid", garaid, "atlid", atlid);
        this.router.navigate(['/matchesforatleta', { mba: JSON.stringify(match.matchesarray), garaid: garaid, atletaid: atlid }]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MatchesByAtletaComponent.prototype, "mba", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MatchesByAtletaComponent.prototype, "garaid", void 0);
    MatchesByAtletaComponent = __decorate([
        core_1.Component({
            selector: "matchesbyatleta",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "matchesbyatleta.component.html",
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute, router_2.Router])
    ], MatchesByAtletaComponent);
    return MatchesByAtletaComponent;
}());
exports.MatchesByAtletaComponent = MatchesByAtletaComponent;
//# sourceMappingURL=matchesbyatleta.component.js.map