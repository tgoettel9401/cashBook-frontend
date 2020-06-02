import { TestBed } from '@angular/core/testing';

import { CashBookEntryService } from './cash-book-entry.service';

describe('CashBookEntryService', () => {
  let service: CashBookEntryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CashBookEntryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
