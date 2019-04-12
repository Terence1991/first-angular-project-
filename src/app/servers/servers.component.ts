import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer:boolean = false;
  serverCreationStatus:string = 'no server created';
  serverName:string = '';
  serverCreated:boolean = false;


  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true; 
    } ,2000)
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.serverCreationStatus = `Server was created. The name of the server is ${this.serverName}`
  }

  onUpdateServerName(event: any) {
    this.serverName =(<HTMLInputElement>event.target).value
  }

}