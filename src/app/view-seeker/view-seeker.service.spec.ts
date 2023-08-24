import { TestBed } from '@angular/core/testing';

import { ViewSeekerService } from './view-seeker.service';

describe('ViewSeekerService', () => {
  let service: ViewSeekerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewSeekerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
