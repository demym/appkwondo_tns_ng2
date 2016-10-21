import {Component} from "@angular/core";

@Component({
    selector: "my-app",
    templateUrl: "second.component.html",
	
})
export class SecondComponent {
    public counter: number = 16;
	public stocaz: string ="stafuncia";
	public lvitems: string[] =["caz","minck","vaff"];

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
