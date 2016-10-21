// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from "nativescript-angular/router";
import {RouterConfig} from "@angular/router";
import {AppComponent} from "./app.component";
import {FirstComponent} from "./first.component";
import {SecondComponent} from "./second.component";

import {AtletiComponent} from "./atleti.component";

import {Parse5DomAdapter} from '@angular/platform-server/src/parse5_adapter';
(<any>Parse5DomAdapter).prototype.getCookie = function (name) { return null; };


export const AppRoutes: RouterConfig = [
    { path: "", redirectTo: "/first", terminal: true },
	{ path: "app", component: AppComponent },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent },
	{ path: "atleti", component: AtletiComponent },
];

nativeScriptBootstrap(AppComponent,[[nsProvideRouter(AppRoutes, {})]]);