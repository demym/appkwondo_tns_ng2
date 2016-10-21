"use strict";
// this import should be first in order to load some required settings (like globals and reflect-metadata)
var application_1 = require("nativescript-angular/application");
var router_1 = require("nativescript-angular/router");
var app_component_1 = require("./app.component");
var first_component_1 = require("./first.component");
var second_component_1 = require("./second.component");
var atleti_component_1 = require("./atleti.component");
var parse5_adapter_1 = require('@angular/platform-server/src/parse5_adapter');
parse5_adapter_1.Parse5DomAdapter.prototype.getCookie = function (name) { return null; };
exports.AppRoutes = [
    { path: "", redirectTo: "/first", terminal: true },
    { path: "app", component: app_component_1.AppComponent },
    { path: "first", component: first_component_1.FirstComponent },
    { path: "second", component: second_component_1.SecondComponent },
    { path: "atleti", component: atleti_component_1.AtletiComponent },
];
application_1.nativeScriptBootstrap(app_component_1.AppComponent, [[router_1.nsProvideRouter(exports.AppRoutes, {})]]);
//# sourceMappingURL=main.js.map