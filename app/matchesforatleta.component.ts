import {Component,Input,OnChanges,SimpleChanges} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';
import {ActivatedRoute} from '@angular/router';

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
  matchesforatleta=[];
  atletaname="";
  atletaid="";
  private  route;

  constructor(route: ActivatedRoute,public glb: GlobalsService){

      this.matchesforatleta = JSON.parse(route.snapshot.params['mba']); // 3
      this.atletaid = route.snapshot.params['atletaid']; // 3
      var atl=glb.getAtletaById(this.atletaid);
      this.atletaname=atl.cognome+" "+atl.nome;
      this.route=route;
      console.log(JSON.stringify(this.matchesforatleta));

  }


   ngOnChanges(changes: SimpleChanges) {
    // this.matchesforatleta = this.route.snapshot.params['mba']; // 3
    // console.log(JSON.stringify(this.matchesforatleta));

  }

}
