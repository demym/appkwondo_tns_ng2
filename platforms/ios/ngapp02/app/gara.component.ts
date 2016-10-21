import {Component,Input,ElementRef} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import { MatchesByProgComponent } from './matchesbyprog.component';
import { MatchesByAtletaComponent } from './matchesbyatleta.component';
import { CronacaComponent } from './cronaca.component';
import { IscrittiComponent } from './iscritti.component';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";
import {ActivatedRoute} from '@angular/router';
import { Page} from "ui/page";





@Component({
    selector: "my-gara",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    directives: [MatchesByProgComponent,MatchesByAtletaComponent,IscrittiComponent,CronacaComponent],
    templateUrl: "gara.component.html",
	
})
export class GaraComponent {
  
    garaid: string;

    gara: any;
    alldata: any;

    mbp: any;
    mba: any;
    cron: any;
    iscritti=[];



	isLoading = false;
    loadingText="Caricamento in corso...";
	
    listLoaded = false;
	
	 constructor(route: ActivatedRoute, private router: Router, private http: Http, private socketService: SocketService, public glb: GlobalsService) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
              this.garaid = route.snapshot.params['garaid']; // 3
              console.log("garaid",this.garaid);
              this.refreshGara();
	 } 

  

     onSocketMsg(item){


     }

    refreshGara() { 
       let url=this.glb.rooturl+"/gare/fullgarabyid/"+this.garaid+"?societaid=20160217220400"; 
       console.log("Refreshing gara from url",url);
       this.isLoading=true;
       this.loadingText="Caricamento in corso...";
      this.http.get(url)
      .map(res => res.json())
      .subscribe(
    data => this.alldata=data,
       
	  err => console.log("Error",err),

	  () => this.gotData()
      )
	 }
     
     private gotData(){
        this.refreshGaraData();
        this.isLoading=false;
        this.loadingText=this.gara.title+" - "+this.gara.location+" - "+this.gara.data;
     }

    refreshGaraData(){
          console.log("gotgara");
         //console.log(JSON.stringify(this.alldata));  
            this.gara=this.alldata.gara.rows[0].doc; 
        this.mbp=this.alldata.matchesbyprog.rows;
         this.mba=this.alldata.matchesbyatleta.rows;
         this.cron=this.alldata.cronaca.rows;

         for (var i=0; i<this.mbp.length; i++){
           var m=this.mbp[i].doc;
           var atl=this.glb.getAtletaById(m.atletaid);
           //console.log(JSON.stringify(atl));
           var cat=this.glb.getCategoria(atl.datanascita,this.gara.data);
           m.categoria=cat;
           m.risulttext="non disputato";
           if (m.disputato=="yes") {
               m.risulttext=m.risultato;
           }

         }

console.log(JSON.stringify(this.mba));
          for (var i=0; i<this.mba.length; i++){
           var m=this.mba[i];
           var atl=this.glb.getAtletaById(m.id);
           var cat=this.glb.getCategoria(atl.datanascita,this.gara.data);
           m.categoria=cat;

         }

       // var atl=this.glb.getAtletaById("aaaa");
       // console.log(atl);
         //this.iscritti={};
         //console.log(this.gara.iscritti);

         this.iscritti=[];
         if (this.gara.iscritti.trim()!="") {
             var arriscr=this.gara.iscritti.split(",");
             console.log("arriscr",arriscr.length);
           
           for (var i=0; i<arriscr.length; i++){
              console.log(i);
              console.log(arriscr[i]);
              var atl=this.glb.getAtletaById(arriscr[i]);

              console.log(JSON.stringify(atl));

              var matchcount=0;
              for (var j=0; j<this.mbp.length; j++){
                    var m=this.mbp[j].doc;
                    if (m.atletaid==arriscr[i]) matchcount++;

              }
                var newiscri={
                  atletaname: atl.cognome+" "+atl.nome,
                  matchcount: matchcount,
                  categoria: this.glb.getCategoria(atl.datanascita,this.gara.data)
              };

              console.log(JSON.stringify(newiscri));
              this.iscritti.push(newiscri);
              
            //var atl=this.glb.getAtletaById(arriscr[i]);
            /*
            console.log(JSON.stringify(atl));
             

 */
           }
          
           
         }

      
    
       console.log("mbp length: "+this.mbp.length);
       console.log("mba length: "+this.mba.length);
       console.log("cronaca length: "+this.cron.length);
       console.log(JSON.stringify(this.iscritti));

       //console.log(JSON.stringify(this.cronaca));
       

    }

    

}





