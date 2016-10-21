import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import { SocketService } from './socket.service';

@Component({
    selector: "my-app",
	directives: [NS_ROUTER_DIRECTIVES],
	providers: [SocketService],
    templateUrl: "first.component.html",
	//template: "<page-router-outlet></page-router-outlet>"
	
})
export class FirstComponent {
    public counter: number = 16;
	public stocaz: string ="stocaz";
 
    constructor(private socketService: SocketService) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
	 }
	
    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
			
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
		this.socketService.connect();
        this.counter--;
		this.stocaz="ma vaffanculo "+this.counter;
		if (this.counter==0) this.stocaz="hai finito coglione";
    }
	
	private onSocketMsg(item: any): void {
        // do something with added item
		console.log("first - socketmsg from service !!",JSON.stringify(item));
        
    } 
}
