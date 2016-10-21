import {Component,Input,OnChanges,SimpleChanges} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";





@Component({
    selector: "matchesforatleta",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "matchesforatleta.component.html",
    //inputs: ['mba'],
	
})
export class MatchesForAtletaComponent implements OnChanges{
  @Input() mba=[];
  matchesforatleta=[];


   ngOnChanges(changes: SimpleChanges) {
     

       //this.mbp[0].doc.matchid="999";
       //console.log("ngOnChanges",JSON.stringify(this.mba));

 

        if (this.mba){
            //console.log(JSON.stringify(this.mba));
            this.matchesforatleta=[];
            for (var i=0; i<this.mba.length; i++){
                  var m=this.mba[i];
                  m.imgurl="~/img/matchnoplay.png";
                  var medaglia="none";
                 
                if (m.matchesarray){
                      for (var j=0; j<m.matchesarray.length; j++){
                         var ma=m.matchesarray[j];
                         if (ma.dadisputare=="yes"){
                         ma.mclass="nondisputato";
                         if (ma.disputato=="yes"){
                             ma.mclass="perso";
                             if (ma.medagliamatch!="none") medaglia=ma.medagliamatch;
                         if (ma.vinto=="yes") ma.mclass="vinto";
                         
                         }
                         } else ma.mclass="danondisputare";

                      }  

                }

                 if (medaglia!="none") m.imgurl="~/img/medaglia_"+medaglia+".png";
               // console.log(m.imgurl);
                this.matchesforatleta.push(this.mba[i]);  
          }

            
              
            }
           
/*
      
          */
  
      
    // changes.prop contains the old and the new value...
  }

}