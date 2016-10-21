import {Component} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';
import { GestureTypes, GestureEventData } from "ui/gestures";

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";





@Component({
    selector: "my-gare",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "gare.component.html",
	
})
export class GareComponent {

    public counter: number = 16;
	public stocaz: string ="stafuncia";
	gare: Array<any> = [];
	a: Array<any> = [];
	isLoading = false;
	
    listLoaded = false;
	
	 constructor(private router: Router, private http: Http, private socketService: SocketService, public glb: GlobalsService) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
	 }
	 
onItemTap(args){

	console.log(args.index);
	this.router.navigate( ['/gara', {garaid: this.gare[args.index].doc.id }] );
}

	 public onLoad(){
		 
    console.log("getting gare");
    this.isLoading = true;
	
	
    this.http.get(this.glb.rooturl+"/gare/findall")
      .map(res => res.json())
      .subscribe(
	  data => this.a=data.rows,
	  err => this.logError(err),
	  () => this.gotGare()
	  )
	 }

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
			
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
		//this.getAtleti();
        this.counter--;
		this.stocaz="ma vaffanculo "+this.counter;
		if (this.counter==0) this.stocaz="hai finito coglione";
	
    }

	 public onLongPress() {
		//this.getAtleti();
        alert("longpress");
	
    }
	

	 
		private gotGare() {
			this.gare=this.a;
			//console.log(JSON.stringify(this.atleti));
			console.log(this.gare.length);
			
		}
	  
	 private logError(err){
		 console.log("ERRORACCIO",err);
		 
	 } 

	 

	 private onSocketMsg(item: any): void {
        // do something with added item
		console.log("gare - socketmsg from service !!",JSON.stringify(item));
        
    } 
	 
}
