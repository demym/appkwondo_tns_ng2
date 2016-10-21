import { Injectable,EventEmitter } from '@angular/core';
var SocketIO = require('nativescript-socket.io');
import { GlobalsService } from './globals.service';



@Injectable()
export class SocketService {

	
  public socket;	
  public socketmsg$= new EventEmitter();

 constructor(public glb: GlobalsService){}

  public connect()  {
	  
	let questo=this;  
    console.log(SocketIO);
    SocketIO.enableDebug();
	 
	//var url="http://9.71.92.105:3000";
    //var url="http://tkdr.herokuapp.com";
	//var url="http://192.168.1.108:3000";
	//var url="http://tnssrv01.mybluemix.net";
    console.log("connecting to socket server at "+this.glb.rooturl);
	this.socket = SocketIO.connect(this.glb.rooturl, {
        log: true,
        secure: false
        //forceWebsockets: true,
    });
	
	
	 this.socket.on('connect', function(s) {
        console.log("SocketService: socket connected");
		console.log(JSON.stringify(s));
	 });	
	 
	 this.socket.on('getnickname', function(data) {
        console.log('SocketService: getnickname', JSON.stringify(data));
		//this.socket.id=data.sockid;
    });
	
	this.socket.on('chatmsg', function(data) {
		
		questo.socketmsg$.next(data);
		//console.log("chatmsg "+JSON.stringify(data));

    });
  }
}