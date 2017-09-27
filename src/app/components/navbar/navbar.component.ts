/// <reference path="../../../../node_modules/@types/socket.io-client/index.d.ts"/>

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Selections} from '../../models/selections';
import {BreakersService} from "../../services/breakers/breakers.service";
import * as _ from 'lodash';
import {Port} from "../../models/port";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Output() popDurationEvent = new EventEmitter();
  @Output() changePortEvent = new EventEmitter();
  @Output() duinoConnectedEvent = new EventEmitter();

  savedPort: string;
  socket: any;
  ports: Port[];
  selections = new Selections;
  connected: boolean = false;

  constructor(private breakerService: BreakersService) {
    // this.popDurationEvent.emit(this.popDuration);
  }

  ngOnInit() {
    if(localStorage.getItem("port")) {
      this.savedPort = localStorage.getItem("port");
      this.selections.selectedPort = this.savedPort;
    }
    if(localStorage.getItem("duration")) {
      this.selections.selectedDuration = parseInt(localStorage.getItem("duration"));
    }

    this.popDurationEvent.emit(this.selections.selectedDuration);

    this.socket = io();
    this.socket.emit('GetSerialPorts');
    this.socket.on('EmitPorts', (ports) => {
      this.ports = ports;
      _.remove(this.ports, (port)=> {
        return port.comName == this.savedPort;
      });
    });
    this.socket.emit('GetDuinoStatus');
    this.socket.on('DuinoStatus', (connected) => { this.connected = connected.status; this.duinoConnectedEmit(); });
  }

  onPortChange(e) {
    let port = e.path[0].value;
    localStorage.setItem("port", port);
    this.selections.selectedPort = port;
  }

  onDurationChange(e) {
    let duration = e.path[0].value;
    localStorage.setItem("duration", duration);
    this.popDurationEvent.emit(duration);
  }

  setPortClick() {
    let $network = this.breakerService.duinoStart({port: this.selections.selectedPort});

    $network.subscribe(
      res => {
        res.ok ? this.connected = true : this.connected = false;
        this.duinoConnectedEmit();
      },
      err => console.error(err)
    );
  }

  duinoConnectedEmit() {
    this.duinoConnectedEvent.emit(this.connected);
  }
}
