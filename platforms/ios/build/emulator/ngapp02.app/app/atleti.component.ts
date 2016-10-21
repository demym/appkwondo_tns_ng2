import {Component} from "@angular/core";
import { Http, HTTP_PROVIDERS } from '@angular/http';
import { SocketService } from './socket.service';

import 'rxjs/add/operator/map';
import {Router} from "@angular/router";



@Component({
    selector: "my-app",
	providers: [HTTP_PROVIDERS,SocketService],
    templateUrl: "atleti.component.html",
	
})
export class AtletiComponent {

    public counter: number = 16;
	public stocaz: string ="stafuncia";
	atleti: Array<any> = [];
	a: Array<any> = [];
	isLoading = false;
	
    listLoaded = false;
	
	 constructor(private router: Router, private http: Http, private socketService: SocketService) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
	 }
	 
	 public onLoad(){
		 
    console.log("getting atleti");
    this.isLoading = true;
	
	
    this.http.get("http://tkdr.herokuapp.com/atleti/findall")
      .map(res => res.json())
      .subscribe(
	  data => this.a=data.rows,
	  err => this.logError(err),
	  () => this.gotAtleti()
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
	

	 
		private gotAtleti() {
			this.atleti=this.a;
			//console.log(JSON.stringify(this.atleti));
			console.log(this.atleti.length);
			
		}
	  
	 private logError(err){
		 console.log("ERRORACCIO",err);
		 
	 } 

	 private onSocketMsg(item: any): void {
        // do something with added item
		console.log("atleti - socketmsg from service !!",JSON.stringify(item));
        
    } 
	 
}
