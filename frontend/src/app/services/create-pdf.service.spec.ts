import { TestBed } from '@angular/core/testing';

import { CreatePdfService } from './create-pdf.service';

describe('CreatePdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CreatePdfService = TestBed.get(CreatePdfService);
    expect(service).toBeTruthy();
  });
});
