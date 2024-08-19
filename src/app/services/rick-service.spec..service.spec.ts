import { TestBed } from '@angular/core/testing';

import { RickServiceSpecService } from './rick-service.spec..service';

describe('RickServiceSpecService', () => {
  let service: RickServiceSpecService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RickServiceSpecService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
