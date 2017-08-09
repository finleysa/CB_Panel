import { Component } from '@angular/core';
import {BreakersService} from "./services/breakers/breakers.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  duration: number = 5;
  port: string;
  duinoConnected: boolean = false;

  onDurationChange(e: number) {
    this.duration = e;
  }

  onConnectedChange(e: boolean) {
    this.duinoConnected = e;
  }
}
