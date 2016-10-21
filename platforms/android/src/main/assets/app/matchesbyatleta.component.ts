import {Component,Input,OnChanges,SimpleChanges} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';
import {ActivatedRoute} from '@angular/router';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";





@Component({
    selector: "matchesbyatleta",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "matchesbyatleta.component.html",
    //inputs: ['mba'],

})
export class MatchesByAtletaComponent implements OnChanges{
  @Input() mba=[];
  @Input() garaid;
  matchesbyatleta=[];
  router;

 constructor(route: ActivatedRoute, router: Router){
   this.router=router;
 }

   ngOnChanges(changes: SimpleChanges) {


       //this.mbp[0].doc.matchid="999";
       //console.log("ngOnChanges",JSON.stringify(this.mba));



        if (this.mba){
            //console.log(JSON.stringify(this.mba));
            this.matchesbyatleta=[];
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
                this.matchesbyatleta.push(this.mba[i]);
          }



            }

/*

          */


    // changes.prop contains the old and the new value...
  }

  matchTap(args){

    console.log(args.index);
    var match=this.matchesbyatleta[args.index];
    var atlid=match.atletaid;
    var garaid=this.garaid;
    console.log("garaid",garaid,"atlid",atlid);


    this.router.navigate( ['/matchesforatleta', {mba: JSON.stringify(match.matchesarray), garaid: garaid, atletaid: atlid }] );
  }

}
