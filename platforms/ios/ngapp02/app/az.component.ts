import {Component} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";

import { Page} from "ui/page";

@Component({
    selector: "my-chat",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "chat.component.html"
	
})
export class AzComponent {
  
   chat: Array<any> = [];
	a: Array<any> = [];
	isLoading = false;

 constructor(private http: Http, private socketService: SocketService, public globalsService: GlobalsService) {
		 
		 	//socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
	 }

     public onLoad(){
		 
    console.log("getting chat");
    this.isLoading = true;
	
	
    this.http.get(this.globalsService.rooturl+"/chat/get")
      .map(res => res.json())
      .subscribe(
	  data => this.a=data.rows,
	  err => this.logError(err),
	  () => this.gotChat()
	  )
	 
 }


  		private gotChat() {
			
			//console.log(JSON.stringify(this.atleti));

            for (var i=0; i<this.a.length; i++){

                this.a[i].isRight=false;
                if (this.a[i].nickname){
                let lnick : string=this.a[i].nickname;
                if (lnick.toLowerCase()=="demy") this.a[i].isRight=true;
                }
            }

            this.chat=this.a;
			console.log(this.chat.length+" messaggi di chat");
            console.log(JSON.stringify(this.chat));
			
		}
	  
	 private logError(err){
		 console.log("ERRORACCIO",err);
		 
	 } 

	 
    
	

}
