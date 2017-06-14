import { Component, OnInit } from '@angular/core';
import {BreakersService} from "../../services/breakers/breakers.service";

@Component({
  selector: 'app-circuit-breakers',
  templateUrl: './circuit-breakers.component.html',
  styleUrls: ['./circuit-breakers.component.less']
})
export class CircuitBreakersComponent implements OnInit {

  constructor(private breakerService: BreakersService){}

  popBreaker(address: string, register: string, breakerNumber: string) {
    this.breakerService.pop({breakerNumber: breakerNumber, address: address, register:   register});
  }

  ngOnInit() {
  }

}
