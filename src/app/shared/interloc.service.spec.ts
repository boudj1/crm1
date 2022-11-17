import { TestBed } from '@angular/core/testing';

import { InterlocService } from './interloc.service';

describe('InterlocService', () => {
  let service: InterlocService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterlocService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
