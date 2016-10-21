// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {nsProvideRouter} from "nativescript-angular/router";
import {enableProdMode} from '@angular/core';
import {RouterConfig} from "@angular/router";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { GlobalsService } from './globals.service';


import {AppComponent} from "./app.component";
import {FirstComponent} from "./first.component";
import {SecondComponent} from "./second.component";
import {AtletiComponent} from "./atleti.component";
import {GareComponent} from "./gare.component";
import {GaraComponent} from "./gara.component";
import {MatchesForAtletaComponent} from "./matchesforatleta.component";
import {ChatComponent} from "./chat.component";
import {AzComponent} from "./az.component";
import {SocietaComponent} from "./societa.component";


import {Parse5DomAdapter} from '@angular/platform-server/src/parse5_adapter';
(<any>Parse5DomAdapter).prototype.getCookie = function (name) { return null; };


export const AppRoutes: RouterConfig = [
    { path: "", redirectTo: "/first", terminal: true },
	{ path: "app", component: AppComponent },
    { path: "first", component: FirstComponent },
    { path: "second", component: SecondComponent },
	{ path: "atleti", component: AtletiComponent },
    { path: "gare", component: GareComponent },
    { path: "chat", component: AzComponent },
     { path: "societa", component: SocietaComponent },
      { path: "gara", component: GaraComponent },
          { path: "matchesforatleta", component: MatchesForAtletaComponent },

];

//enableProdMode();
nativeScriptBootstrap(AppComponent,[HTTP_PROVIDERS, Http,[nsProvideRouter(AppRoutes, {})]]);
