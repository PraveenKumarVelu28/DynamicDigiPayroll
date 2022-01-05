import { TestBed } from '@angular/core/testing';

import { DigipayrollServiceService } from './digipayroll-service.service';

describe('DigipayrollServiceService', () => {
  let service: DigipayrollServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DigipayrollServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
