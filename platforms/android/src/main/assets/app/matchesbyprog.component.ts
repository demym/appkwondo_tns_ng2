import {Component,Input,OnChanges,SimpleChanges} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import { Page} from "ui/page";





@Component({
    selector: "matchesbyprog",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "matchesbyprog.component.html",
    //inputs: ['mbp'],

})
export class MatchesByProgComponent implements OnChanges {

 private _mbp;
 @Input() mbp=[];
 @Input() garaid;
 matchesbyprog=[];



  constructor(public glb: GlobalsService, private router: Router){



  }

  ngOnInit(){
     this._mbp=this.mbp;
     console.log("ngOnInit",JSON.stringify(this.mbp));


  }

  ngDoCheck(){

   //console.log("ngDoCheck",JSON.stringify(this.mbp));


  }

  ngOnChanges(changes: SimpleChanges) {


       //this.mbp[0].doc.matchid="999";
      //console.log("ngOnChanges",JSON.stringify(this.mbp));



        if (this.mbp){
            this.matchesbyprog=[];
            //console.log("lengthbefore",this.mbp.length);
            for (var i=0; i<this.mbp.length; i++){
              var doc=this.mbp[i].doc;

              var m=this.mbp[i].doc;

              var med=m.medagliamatch;
              m.imgurl="res://matchnoplay";
              m.imgurl="~/img/matchnoplay.png";
              m.cacatext="dd: "+m.dadisputare+" d: "+m.disputato+" v: "+m.vinto;

              if (m.dadisputare=="yes") {
                m.imgurl="~/img/matchtoplay.png";
                if (m.disputato=="yes") {
                    if (m.vinto=="yes") {
                        m.imgurl="~/img/matchok.png";
                    } else {
                        m.imgurl="~/img/matchko.png";

                    }
                    if (med!="none") m.imgurl="~/img/medaglia_"+med+".png";
                }
              }


                if (doc.dadisputare=="yes")  this.matchesbyprog.push(this.mbp[i]);
          }



            }

/*

          */


    // changes.prop contains the old and the new value...
  }


  matchTap(args){

    console.log(args.index);
    var match=this.matchesbyprog[args.index];
    console.log(JSON.stringify(match));

    var atlid=match.doc.atletaid;

    var garaid=this.garaid;
    console.log("garaid",garaid,"atlid",atlid);

    var mfa=this.glb.filterRows(this.matchesbyprog,{atletaid: atlid},null);
    console.log(mfa.rows.length);
    //console.log(JSON.stringify(mfa.rows));

    this.router.navigate( ['/matchesforatleta', {mba: JSON.stringify(mfa.rows), garaid: garaid, atletaid: atlid }] );
  }
}
