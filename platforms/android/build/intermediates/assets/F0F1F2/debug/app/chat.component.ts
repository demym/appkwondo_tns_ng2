import {Component} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';

import 'rxjs/add/operator/map';



@Component({
    selector: "my-chat",
	providers: [HTTP_PROVIDERS,SocketService,GlobalsService],
    templateUrl: "chat.component.html",
	
})
export class ChatComponent {

    public counter: number = 16;
	public stocaz: string ="stafuncia";
    chat: Array<any> = [];
	a: Array<any> = [];
	isLoading = false;

    listLoaded = false;
	
	 constructor(private http: Http, private socketService: SocketService, public globalsService: GlobalsService) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
	 }
	 
	

 public onLoad(){
		 
    console.log("getting gare");
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
			this.chat=this.a;
			//console.log(JSON.stringify(this.atleti));
			console.log(this.chat.length+" chat messages");
			
		}
	  
	 private logError(err){
		 console.log("ERRORACCIO",err);
		 
	 } 

	 private onSocketMsg(item: any): void {
        // do something with added item
		console.log("chat - socketmsg from service !!",JSON.stringify(item));
        
    } 


    
	 
}
