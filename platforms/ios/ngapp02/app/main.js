"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var router_1 = require("nativescript-angular/router");
var http_1 = require('@angular/http');
var globals_service_1 = require('./globals.service');
var app_component_1 = require("./app.component");
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
var atleti_component_1 = require("./atleti.component");
var gare_component_1 = require("./gare.component");
var gara_component_1 = require("./gara.component");
var az_component_1 = require("./az.component");
var societa_component_1 = require("./societa.component");
var parse5_adapter_1 = require('@angular/platform-server/src/parse5_adapter');
parse5_adapter_1.Parse5DomAdapter.prototype.getCookie = function (name) { return null; };
exports.AppRoutes = [
    { path: "", redirectTo: "/first", terminal: true },
    { path: "app", component: app_component_1.AppComponent },
    { path: "first", component: first_component_1.FirstComponent },
    { path: "second", component: second_component_1.SecondComponent },
    { path: "atleti", component: atleti_component_1.AtletiComponent },
    { path: "gare", component: gare_component_1.GareComponent },
    { path: "chat", component: az_component_1.AzComponent },
    { path: "societa", component: societa_component_1.SocietaComponent },
    { path: "gara", component: gara_component_1.GaraComponent },
];
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [http_1.HTTP_PROVIDERS, http_1.Http, [router_1.nsProvideRouter(exports.AppRoutes, {})], globals_service_1.GlobalsService]);
//# sourceMappingURL=main.js.map