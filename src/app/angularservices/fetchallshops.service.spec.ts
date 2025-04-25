import { TestBed } from '@angular/core/testing';

import { FetchallshopsService } from './fetchallshops.service';

describe('FetchallshopsService', () => {
  let service: FetchallshopsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchallshopsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
