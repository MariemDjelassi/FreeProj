import { TestBed } from '@angular/core/testing';

import { MailApiService } from './mail-api.service';

describe('MailApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MailApiService = TestBed.get(MailApiService);
    expect(service).toBeTruthy();
  });
});
