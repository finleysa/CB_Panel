import { Component, Input, Renderer2 } from '@angular/core';
import { BreakersService } from "../../services/breakers/breakers.service";
import { Breakers } from '../../models/breakers';
import { Breaker } from "../../models/breaker";
import { Timer } from "../../models/timer";

@Component({
  selector: 'app-circuit-breakers',
  templateUrl: './circuit-breakers.component.html',
  styleUrls: ['./circuit-breakers.component.less']
})
export class CircuitBreakersComponent {
  @Input() popDuration = parseInt(localStorage.getItem('duration'));
  @Input() duinoConnected: boolean;

  private disableButtons = false;
  private breakers: Array<Breaker>;
  public timer = new Timer(0,0,0);

  constructor(private renderer: Renderer2, private breakerService: BreakersService){
    this.breakers = Breakers.getBreakers();
  }

  popBreaker(e, address: string, register: string, breakerNumber: string) {
    this.renderer.addClass(e.target, 'popped');
    this.disableButtons = true;
    this.breakerService.pop({
      breakerNumber: breakerNumber,
      address: address,
      register: register,
      duration: this.popDuration,
    });

    setTimeout(()=> {
      this.disableButtons=false;
      this.renderer.removeClass(e.target, 'popped');
    }, this.popDuration * 1000);

    this.timer.max = this.popDuration;
    this.timer.min = 0;
    this.timer.now = this.popDuration;
    console.log("POPDURATION", this.popDuration)

    let popTimer = setInterval(() => {
      if (this.timer.now <= 0) {
        this.timer.width = '100%';
        clearInterval(popTimer);
        return;
      }

      this.timer.now --;
      this.timer.width = Math.floor((this.timer.now / this.timer.max) * 100) + "%";
    }, 1000)
  }

}
