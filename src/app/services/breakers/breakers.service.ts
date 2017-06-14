import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {xhrHeaders} from "../../xhr-headers";

@Injectable()
export class BreakersService {
  private url = '/popbreaker';

  constructor(private http: Http) {}

  pop(data: object) {
    const network$ = this.http
      .post(this.url,
        data,
        xhrHeaders());

    network$.subscribe(
      res => console.log(res.statusText),
      err => console.log(err)
    );
  }
}
