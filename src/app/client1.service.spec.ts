import { TestBed } from '@angular/core/testing';

import { Client1Service } from './client1.service';

describe('Client1Service', () => {
  let service: Client1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Client1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
