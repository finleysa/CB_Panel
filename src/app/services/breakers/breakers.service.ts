import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {xhrHeaders} from "../../xhr-headers";

@Injectable()
export class BreakersService {
  private popBreakerURL = '/popbreaker';
  private startDuino = '/duinostart';
  public connected = false;

  constructor(private http: Http) {}

  pop(data: object) {
    const network$ = this.http
      .post(this.popBreakerURL,
        data,
        xhrHeaders());

    network$.subscribe(
      res => console.log(res.statusText),
      err => console.error(err)
    );
  }

  duinoStart(data: object) {
    return this.http
      .post(this.startDuino,
        data,
        xhrHeaders());
  }
}
