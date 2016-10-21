import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
import { Router, NavigationStart, NavigationEnd } from '@angular/router';
import { SocketService } from './socket.service';
import { GlobalsService } from './globals.service';



@Component({
    selector: "my-app",
	directives: [NS_ROUTER_DIRECTIVES],
	providers: [SocketService,GlobalsService],
    templateUrl: "first.component.html",
	//template: "<page-router-outlet></page-router-outlet>"
	
})
export class FirstComponent {
    public counter: number = 16;
	public stocaz: string ="stocaz";



public menu=[
{
 name: "ChatKwonDo",
 path: "/chat" 
},
{
 name: "Atleti",
 path: "/atleti"   
},
{
 name: "Gare",
 path: "/gare"   
},
{
 name: "Società",
 path: "/societa"   
}


]
 
    constructor(private socketService: SocketService,private glb: GlobalsService, private router: Router) {
		 
		 	socketService.socketmsg$.subscribe((item) => this.onSocketMsg(item));
             glb.getAtleti(function(){

                 
             });
	 }

     onItemTap(args){

console.log(args);
console.log(args.index);
//alert(args.name+" - "+args.path);
this.router.navigate([this.menu[args.index].path]);


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
