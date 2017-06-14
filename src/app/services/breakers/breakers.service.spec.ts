import { TestBed, inject } from '@angular/core/testing';

import { BreakersService } from './breakers.service';

describe('BreakersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BreakersService]
    });
  });

  it('should be created', inject([BreakersService], (service: BreakersService) => {
    expect(service).toBeTruthy();
  }));
});
