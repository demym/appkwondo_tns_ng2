"use strict";
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var http_1 = require('@angular/http');
var globals = require('./globals'); //<==== this one
var GlobalsService = (function () {
    function GlobalsService(location, http) {
        this.location = location;
        this.http = http;
        //public atleti: Array<any>;
        this.atleti = [];
        this.rooturl = "http://tkdr.herokuapp.com";
        this.getMatchImage = function (m) {
            console.log("getMatchImage", JSON.stringify(m));
            var med = m.medagliamatch;
            var ret = "~/img/matchtoplay.png";
            if (m.dadisputare == "yes") {
                ret = "~/img/matchtoplay.png";
                if (m.disputato == "yes") {
                    if (m.vinto == "yes") {
                        ret = "~/img/matchok.png";
                    }
                    else {
                        ret = "~/img/matchko.png";
                    }
                    if (med != "none")
                        ret = "~/img/medaglia_" + med + ".png";
                }
            }
            return ret;
        };
        this.filterRows = function (input, filt, options) {
            var opts = {
                exact: false,
                userows: true
            };
            var $m = input;
            if (!opts.exact)
                opts.exact = false;
            console.log("filterrows: ");
            //console.log($m)
            var $retrows = {
                rows: []
            };
            var rows;
            if ($m.rows) {
                rows = $m.rows;
            }
            else
                rows = $m;
            //var rows = $m.rows; //[{person:"me", age :"30"},{person:"you",age:"25"}];
            for (var i = 0; i < rows.length; i++) {
                var row = rows[i];
                var eligible = true;
                for (var key in row.doc) {
                    // console.log("key: "+key + " . "+ row.doc[key]);
                    for (var fkey in filt) {
                        if (fkey == key) {
                            //console.log("found key ---->"+fkey);
                            var v1 = filt[fkey].toLowerCase();
                            if (v1.trim() != "") {
                                var v2 = row.doc[key].toLowerCase();
                                if (opts.exact) {
                                    if (v2.trim() == v1.trim()) {
                                    }
                                    else {
                                        eligible = eligible && false;
                                    }
                                }
                                else {
                                    if (v2.indexOf(v1) > -1) {
                                    }
                                    else {
                                        eligible = eligible && false;
                                    }
                                }
                            }
                        }
                    }
                }
                if (eligible)
                    $retrows.rows.push(row);
            }
            return $retrows;
        };
    }
    GlobalsService.prototype.goBack = function () {
        this.location.back();
    };
    GlobalsService.prototype.getSplitLength = function (str) {
        var retvalue = 0;
        if (str.trim() !== "") {
            var arr = str.split(",");
            retvalue = arr.length;
        }
        return retvalue;
    };
    GlobalsService.prototype.getAtleti = function (callback) {
        var _this = this;
        this.http.get(this.rooturl + "/atleti/findall")
            .map(function (res) { return res.json(); })
            .subscribe(function (data) { return _this.atleti = data.rows; }, function (err) { return console.log("ERROR", err); }, function () { return _this.gotAtleti(callback); });
    };
    GlobalsService.prototype.gotAtleti = function (callback) {
        console.log("global gotAtleti: " + this.atleti.length);
        globals.atleti = this.atleti;
        if (callback)
            callback();
    };
    GlobalsService.prototype.getAtletaById = function (id) {
        var retvalue = {};
        //console.log("global.getatletabyid "+id+", atleti: "+globals.atleti.length);
        for (var i = 0; i < globals.atleti.length; i++) {
            var atl = globals.atleti[i].doc;
            //console.log(JSON.stringify(atl));
            if (atl.id == id)
                return atl;
        }
        //var atleti=appModule.resources["atleti"];
        return {};
        /*
        var atleti=this.atleti;
    
        console.log("global.getatletabyid "+id+", atleti: "+atleti.rows.length);
        var retvalue={};
    
        for (var i=0; i<atleti.rows.length; i++){
    
            var row=atleti.rows[i];
            var doc=row.doc;
            if (doc.id==id) {
    
    
                return doc;
            }
    
        }
    
        return retvalue;
        */
    };
    GlobalsService.prototype.getCategoria = function (dn, referral_date) {
        var cat = "senior a";
        var curyear = new Date().getFullYear();
        //console.log("curyear "+curyear)
        if (referral_date) {
            var arrd = referral_date.split("/");
            var annogara = arrd[2];
            curyear = annogara;
        }
        //sdebug("curyear: "+curyear);
        if (dn.trim() == "") {
            return "senior b";
        }
        var ar = dn.split(".");
        var byear = ar[2];
        var eta = parseInt(String(curyear), 10) - parseInt(byear, 10);
        //sdebug("calcolo età: "+eta);
        if ((eta >= 18) && (eta <= 35))
            cat = "senior a";
        if ((eta >= 15) && (eta <= 17))
            cat = "junior";
        if ((eta >= 12) && (eta <= 14))
            cat = "cadetti a";
        if ((eta >= 10) && (eta <= 11))
            cat = "cadetti b";
        if (eta > 35)
            cat = "senior b";
        if (eta < 10)
            cat = "esordienti";
        return cat;
    };
    GlobalsService = __decorate([
        //<==== this one
        core_1.Injectable(), 
        __metadata('design:paramtypes', [common_1.Location, http_1.Http])
    ], GlobalsService);
    return GlobalsService;
}());
exports.GlobalsService = GlobalsService;
//# sourceMappingURL=globals.service.js.map