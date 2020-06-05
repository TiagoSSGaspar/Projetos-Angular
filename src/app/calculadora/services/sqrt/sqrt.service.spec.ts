import { TestBed } from '@angular/core/testing';

import { SqrtService } from './sqrt.service';

describe('SqrtService', () => {
  let service: SqrtService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SqrtService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
