import { Injectable,EventEmitter } from '@angular/core';
var SocketIO = require('nativescript-socket.io');


@Injectable()
export class SocketService {

	
  public socket;	
  public socketmsg$= new EventEmitter();
  public connect()  {
	  
	let questo=this;  
    console.log(SocketIO);
    SocketIO.enableDebug();
	 
	//var url="http://9.71.92.105:3000";
    var url="http://tkdr.herokuapp.com";
	//var url="http://192.168.1.108:3000";
	//var url="http://tnssrv01.mybluemix.net";
    console.log("connecting to socket server at "+url);
	this.socket = SocketIO.connect(url, {
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