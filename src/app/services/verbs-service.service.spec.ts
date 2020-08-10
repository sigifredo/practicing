import { TestBed } from '@angular/core/testing';

import { VerbsServiceService } from './verbs-service.service';

describe('VerbsServiceService', () => {
  let service: VerbsServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerbsServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
