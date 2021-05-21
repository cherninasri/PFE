import { TestBed } from '@angular/core/testing';

import { Securite2Service } from './securite2.service';

describe('Securite2Service', () => {
  let service: Securite2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Securite2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
