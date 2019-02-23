import { TestBed } from '@angular/core/testing';

import { MetaTestService } from './meta-test.service';

describe('MetaTestService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MetaTestService = TestBed.get(MetaTestService);
    expect(service).toBeTruthy();
  });
});
