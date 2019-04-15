import { TestBed } from '@angular/core/testing';

import { FreelancerApiService } from './freelancer-api.service';

describe('FreelancerApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FreelancerApiService = TestBed.get(FreelancerApiService);
    expect(service).toBeTruthy();
  });
});
