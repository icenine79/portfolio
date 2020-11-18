import { TestBed } from '@angular/core/testing';

import { DayResolverService } from './day-resolver.service';

describe('DayResolverService', () => {
  let service: DayResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DayResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
