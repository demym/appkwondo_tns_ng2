import {Component} from "@angular/core";
import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';

@Component({
    selector: "my-app",
	directives: [NS_ROUTER_DIRECTIVES],
    //templateUrl: "app.component.html",
	template: "<page-router-outlet></page-router-outlet>"
	
})
export class AppComponent {
    public counter: number = 16;
	public stocaz: string ="stocaz";

    public get message(): string {
        if (this.counter > 0) {
            return this.counter + " taps left";
        } else {
			
            return "Hoorraaay! \nYou are ready to start building!";
        }
    }
    
    public onTap() {
        this.counter--;
		this.stocaz="ma vaffanculo "+this.counter;
		if (this.counter==0) this.stocaz="hai finito coglione";
    }
}
