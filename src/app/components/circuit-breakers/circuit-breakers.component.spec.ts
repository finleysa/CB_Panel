import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircuitBreakersComponent } from './circuit-breakers.component';

describe('CircuitBreakersComponent', () => {
  let component: CircuitBreakersComponent;
  let fixture: ComponentFixture<CircuitBreakersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircuitBreakersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircuitBreakersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
