"use strict";
var core_1 = require("@angular/core");
var http_1 = require('@angular/http');
var socket_service_1 = require('./socket.service');
var globals_service_1 = require('./globals.service');
var matchesbyprog_component_1 = require('./matchesbyprog.component');
var matchesbyatleta_component_1 = require('./matchesbyatleta.component');
var cronaca_component_1 = require('./cronaca.component');
var iscritti_component_1 = require('./iscritti.component');
require('rxjs/add/operator/map');
var router_1 = require("@angular/router");
var router_2 = require('@angular/router');
var GaraComponent = (function () {
    function GaraComponent(route, router, http, socketService, glb) {
        var _this = this;
        this.router = router;
        this.http = http;
        this.socketService = socketService;
        this.glb = glb;
        this.infoBox = false;
        this.iscritti = [];
        this.isLoading = false;
        this.loadingText = "Caricamento in corso...";
        this.listLoaded = false;
        socketService.socketmsg$.subscribe(function (item) { return _this.onSocketMsg(item); });
        this.garaid = route.snapshot.params['garaid']; // 3
        console.log("garaid", this.garaid);
        this.refreshGara();
    }
    GaraComponent.prototype.onSocketMsg = function (item) {
    };
    GaraComponent.prototype.refreshGara = function () {
        var _this = this;
        var url = this.glb.rooturl + "/gare/fullgarabyid/" + this.garaid + "?societaid=20160217220400";
        console.log("Refreshing gara from url", url);
        this.isLoading = true;
        this.loadingText = "Caricamento in corso...";
        this.http.get(url)
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.alldata = data; }, function (err) { return console.log("Error", err); }, function () { return _this.gotData(); });
    };
    GaraComponent.prototype.gotData = function () {
        this.refreshGaraData();
        this.isLoading = false;
        this.loadingText = this.gara.title + " - " + this.gara.location + " - " + this.gara.data;
    };
    GaraComponent.prototype.refreshGaraData = function () {
        console.log("gotgara");
        //console.log(JSON.stringify(this.alldata));  
        this.gara = this.alldata.gara.rows[0].doc;
        this.mbp = this.alldata.matchesbyprog.rows;
        this.mba = this.alldata.matchesbyatleta.rows;
        this.cron = this.alldata.cronaca.rows;
        for (var i = 0; i < this.mbp.length; i++) {
            var m = this.mbp[i].doc;
            var atl = this.glb.getAtletaById(m.atletaid);
            //console.log(JSON.stringify(atl));
            var cat = this.glb.getCategoria(atl.datanascita, this.gara.data);
            m.categoria = cat;
            m.risulttext = "non disputato";
            if (m.disputato == "yes") {
                m.risulttext = m.risultato;
            }
        }
        //console.log(JSON.stringify(this.mba));
        for (var i = 0; i < this.mba.length; i++) {
            var m = this.mba[i];
            var atl = this.glb.getAtletaById(m.id);
            var cat = this.glb.getCategoria(atl.datanascita, this.gara.data);
            m.categoria = cat;
        }
        // var atl=this.glb.getAtletaById("aaaa");
        // console.log(atl);
        //this.iscritti={};
        //console.log(this.gara.iscritti);
        this.iscritti = [];
        if (this.gara.iscritti.trim() != "") {
            var arriscr = this.gara.iscritti.split(",");
            //console.log("arriscr",arriscr.length);
            for (var i = 0; i < arriscr.length; i++) {
                //console.log(i);
                //console.log(arriscr[i]);
                var atl = this.glb.getAtletaById(arriscr[i]);
                //console.log(JSON.stringify(atl));
                var matchcount = 0;
                for (var j = 0; j < this.mbp.length; j++) {
                    var m = this.mbp[j].doc;
                    if (m.atletaid == arriscr[i])
                        matchcount++;
                }
                var newiscri = {
                    atletaname: atl.cognome + " " + atl.nome,
                    matchcount: matchcount,
                    categoria: this.glb.getCategoria(atl.datanascita, this.gara.data)
                };
                //console.log(JSON.stringify(newiscri));
                this.iscritti.push(newiscri);
            }
        }
        //console.log("mbp length: "+this.mbp.length);
        //console.log("mba length: "+this.mba.length);
        //console.log("cronaca length: "+this.cron.length);
        //console.log(JSON.stringify(this.iscritti));
        //console.log(JSON.stringify(this.cronaca));
    };
    GaraComponent.prototype.infoTap = function () {
        this.infoBox = !this.infoBox;
    };
    GaraComponent = __decorate([
        core_1.Component({
            selector: "my-gara",
            providers: [http_1.HTTP_PROVIDERS, socket_service_1.SocketService, globals_service_1.GlobalsService],
            directives: [matchesbyprog_component_1.MatchesByProgComponent, matchesbyatleta_component_1.MatchesByAtletaComponent, iscritti_component_1.IscrittiComponent, cronaca_component_1.CronacaComponent],
            templateUrl: "gara.component.html",
        }), 
        __metadata('design:paramtypes', [router_2.ActivatedRoute, router_1.Router, http_1.Http, socket_service_1.SocketService, globals_service_1.GlobalsService])
    ], GaraComponent);
    return GaraComponent;
}());
exports.GaraComponent = GaraComponent;
//# sourceMappingURL=gara.component.js.map