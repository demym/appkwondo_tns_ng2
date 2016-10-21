"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
require('rxjs/add/operator/map');
var MatchesByProgComponent = (function () {
    function MatchesByProgComponent(glb) {
        this.glb = glb;
        this.mbp = [];
        this.matchesbyprog = [];
    }
    MatchesByProgComponent.prototype.ngOnInit = function () {
        this._mbp = this.mbp;
        console.log("ngOnInit", JSON.stringify(this.mbp));
    };
    MatchesByProgComponent.prototype.ngDoCheck = function () {
        //console.log("ngDoCheck",JSON.stringify(this.mbp));
    };
    MatchesByProgComponent.prototype.ngOnChanges = function (changes) {
        //this.mbp[0].doc.matchid="999";
        //console.log("ngOnChanges",JSON.stringify(this.mbp));
        if (this.mbp) {
            this.matchesbyprog = [];
            //console.log("lengthbefore",this.mbp.length);
            for (var i = 0; i < this.mbp.length; i++) {
                var doc = this.mbp[i].doc;
                var m = this.mbp[i].doc;
                var med = m.medagliamatch;
                m.imgurl = "res://matchnoplay";
                m.imgurl = "~/img/matchnoplay.png";
                m.cacatext = "dd: " + m.dadisputare + " d: " + m.disputato + " v: " + m.vinto;
                if (m.dadisputare == "yes") {
                    m.imgurl = "~/img/matchtoplay.png";
                    if (m.disputato == "yes") {
                        if (m.vinto == "yes") {
                            m.imgurl = "~/img/matchok.png";
                        }
                        else {
                            m.imgurl = "~/img/matchko.png";
                        }
                        if (med != "none")
                            m.imgurl = "~/img/medaglia_" + med + ".png";
                    }
                }
                if (doc.dadisputare == "yes")
                    this.matchesbyprog.push(this.mbp[i]);
            }
        }
        /*
              
                  */
        // changes.prop contains the old and the new value...
    };
    MatchesByProgComponent.prototype.matchTap = function (args) {
        console.log(args.index);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Object)
    ], MatchesByProgComponent.prototype, "mbp", void 0);
    MatchesByProgComponent = __decorate([
        core_1.Component({
            selector: "matchesbyprog",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            templateUrl: "matchesbyprog.component.html",
        }), 
        __metadata('design:paramtypes', [globals_service_1.GlobalsService])
    ], MatchesByProgComponent);
    return MatchesByProgComponent;
}());
exports.MatchesByProgComponent = MatchesByProgComponent;
//# sourceMappingURL=matchesbyprog.component.js.map