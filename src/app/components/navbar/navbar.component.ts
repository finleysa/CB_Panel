/// <reference path="../../../../node_modules/@types/socket.io-client/index.d.ts"/>

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import * as _ from "lodash";
import {Selections} from '../../models/selections';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Output() waitTimeUpdated= new EventEmitter();
  waitTime: number;
  socket: any;
  ports: any;
  selections = new Selections;

  constructor() {
    this.waitTimeUpdated.emit(this.waitTime);
  }

  ngOnInit() {
    if(localStorage.getItem("port")) {
      this.selections.selectedPort = localStorage.getItem("port");
    }
    if(localStorage.getItem("duration")) {
      this.selections.selectedDuration = localStorage.getItem("duration");
    }

    this.socket = io();
    this.socket.emit('GetSerialPorts');
    this.socket.on('EmitPorts', (ports) => {
      this.ports = ports;
    });
  }

  onPortChange(e) {
    localStorage.setItem("port", e.path[0].value);
    this.selections.selectedPort = e.path[0].value;
  }

  onDurationChange(e) {
    let duration = e.path[0].value;
    localStorage.setItem("duration", duration);
    this.selections.selectedDuration = duration;
    this.waitTimeUpdated.emit(duration);
  }
}
