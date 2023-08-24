import { TestBed } from '@angular/core/testing';

import { ViewOfferService } from './view-offer.service';

describe('ViewOfferService', () => {
  let service: ViewOfferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewOfferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
