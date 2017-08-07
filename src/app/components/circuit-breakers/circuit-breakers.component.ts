import { Component, Input, OnInit, Renderer2 } from '@angular/core';
import { BreakersService } from "../../services/breakers/breakers.service";
import { Breakers } from '../../models/breakers';
import { Breaker } from "../../models/breaker";

@Component({
  selector: 'app-circuit-breakers',
  templateUrl: './circuit-breakers.component.html',
  styleUrls: ['./circuit-breakers.component.less']
})
export class CircuitBreakersComponent implements OnInit {
  @Input()
    waitTime: number;

  disableButtons=false;
  breakers: Array<Breaker>;

  constructor(private renderer: Renderer2, private breakerService: BreakersService){
    this.breakers = Breakers.getBreakers();
  }

  popBreaker(e, address: string, register: string, breakerNumber: string) {
    this.renderer.addClass(e.target, 'popped');
    this.disableButtons = true;
    this.breakerService.pop({breakerNumber: breakerNumber, address: address, register: register});
    setTimeout(()=> {
      this.disableButtons=false;
      this.renderer.removeClass(e.target, 'popped');
    }, 4000)
  }

  ngOnInit() {

  }

}
