import { TestBed } from '@angular/core/testing';

import { SecretwordService } from './secretword.service';

describe('SecretwordService', () => {
  let service: SecretwordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SecretwordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
