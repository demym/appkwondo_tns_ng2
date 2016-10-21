import {Component,Input,OnChanges,SimpleChanges} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";





@Component({
    selector: "iscritti",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "iscritti.component.html",
   // inputs: ['iscritti'],

	
})
export class IscrittiComponent implements OnChanges {
   @Input() iscritti=[];
   iscr=[];

     ngOnChanges(changes: SimpleChanges) {

         if (this.iscritti){

             console.log("ngchanges",JSON.stringify(this.iscritti));

            for (var i=0; i<this.iscritti.length; i++){

                this.iscr.push(this.iscritti[i]);
            }

         }
     }
}