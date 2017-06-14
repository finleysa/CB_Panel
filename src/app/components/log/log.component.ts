import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.less']
})
export class LogComponent implements OnInit {
  public messages: string[] = [];

  constructor() {

  }

  ngOnInit() {
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")
    this.messages.push("test")

  }

}
