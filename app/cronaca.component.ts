import {Component} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";


@Component({
    selector: "cronaca",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "cronaca.component.html",
    inputs: ['cronaca'],
     
	
})
export class CronacaComponent {
  
}