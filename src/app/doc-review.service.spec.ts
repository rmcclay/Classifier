import { TestBed } from '@angular/core/testing';

import { DocReviewService } from './doc-review.service';

describe('DocReviewService', () => {
  let service: DocReviewService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocReviewService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
