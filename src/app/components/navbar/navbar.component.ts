import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less']
})
export class NavbarComponent implements OnInit {
  @Output() waitTimeUpdated= new EventEmitter();
  waitTime: number = 4;

  constructor() {
    this.waitTimeUpdated.emit(this.waitTime);
  }

  ngOnInit() {
  }
}
