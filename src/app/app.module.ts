import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { BreakersService } from './services/breakers/breakers.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CircuitBreakersComponent } from './components/circuit-breakers/circuit-breakers.component';
import { LogComponent } from './components/log/log.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CircuitBreakersComponent,
    LogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    BreakersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
