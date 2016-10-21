import { Injectable,EventEmitter } from '@angular/core';
import {Location} from '@angular/common';
import { Http, HTTP_PROVIDERS } from '@angular/http';
import globals = require('./globals'); //<==== this one


@Injectable()
export class GlobalsService {

 //public atleti: Array<any>;
 atleti=[];
 public currentgara: any;  
 public rooturl: string= "http://tkdr.herokuapp.com";

 constructor(private location: Location, private http: Http) {

 } 



 public goBack() {
        this.location.back();
    }

 public getSplitLength(str: string) {
        var retvalue=0;

		if (str.trim()!==""){
		var arr=str.split(",");
		retvalue=arr.length;
		}
		return retvalue;

	 }

public getAtleti(callback) {
 this.http.get(this.rooturl+"/atleti/findall")
      .map(res => res.json())
      .subscribe(
	  data => this.atleti=data.rows,
	  err => console.log("ERROR",err),
	  () => this.gotAtleti(callback)
	  )
	 }	 


public gotAtleti(callback){
console.log("global gotAtleti: "+this.atleti.length);
globals.atleti=this.atleti;
 if (callback) callback();
}

public getAtletaById(id) {
		var retvalue={
	};
	 console.log("global.getatletabyid "+id+", atleti: "+globals.atleti.length);
	
    for (var i=0; i<globals.atleti.length; i++){

		var atl=globals.atleti[i].doc;
		//console.log(JSON.stringify(atl));
		if (atl.id==id) return atl;
	}

	//var atleti=appModule.resources["atleti"];

	return {};
	/*
	var atleti=this.atleti;
	
    console.log("global.getatletabyid "+id+", atleti: "+atleti.rows.length);
	var retvalue={};
	
	for (var i=0; i<atleti.rows.length; i++){
		
		var row=atleti.rows[i];
		var doc=row.doc;
		if (doc.id==id) {
			
			
			return doc;
		}
		
	}
	
	return retvalue;
	*/
}


public getCategoria(dn,referral_date)
	{
	
	 
     var cat="senior a";		 
	 var curyear=new Date().getFullYear();
	 //console.log("curyear "+curyear)
	 if (referral_date) {
	  var arrd=referral_date.split("/");
      var annogara=arrd[2];
	  curyear=annogara;
	 }
	 //sdebug("curyear: "+curyear);
     
	 if (dn.trim()=="") {
		 return "senior b";
	 }
     var ar=dn.split(".");	
     var byear=ar[2];	 
	 
	 var eta=parseInt(String(curyear),10)-parseInt(byear,10);
	 //sdebug("calcolo età: "+eta);
	 
	 if ((eta>=18) && (eta<=35)) cat="senior a"; 
	 if ((eta>=15) && (eta<=17)) cat="junior"; 
	 if ((eta>=12) && (eta<=14)) cat="cadetti a"; 
	 if ((eta>=10) && (eta<=11)) cat="cadetti b"; 
	 if (eta>35) cat="senior b";
	 if (eta<10) cat="esordienti";
	
	 
	 return cat	
		
	}
	 
}