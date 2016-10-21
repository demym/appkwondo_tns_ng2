"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var MatchesForAtletaComponent = (function () {
    function MatchesForAtletaComponent() {
        this.mba = [];
        this.matchesforatleta = [];
    }
    MatchesForAtletaComponent.prototype.ngOnChanges = function (changes) {
        //this.mbp[0].doc.matchid="999";
        //console.log("ngOnChanges",JSON.stringify(this.mba));
        if (this.mba) {
            //console.log(JSON.stringify(this.mba));
            this.matchesforatleta = [];
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
                this.matchesforatleta.push(this.mba[i]);
            }
        }
        /*
              
                  */
        // changes.prop contains the old and the new value...
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MatchesForAtletaComponent.prototype, "mba", void 0);
    MatchesForAtletaComponent = __decorate([
        core_1.Component({
            selector: "matchesforatleta",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "matchesforatleta.component.html",
        }), 
        __metadata('design:paramtypes', [])
    ], MatchesForAtletaComponent);
    return MatchesForAtletaComponent;
}());
exports.MatchesForAtletaComponent = MatchesForAtletaComponent;
//# sourceMappingURL=matchesforatleta.component.js.map