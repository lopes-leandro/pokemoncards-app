import { TestBed } from '@angular/core/testing';

import { ApiCardsService } from './api-cards.service';

describe('ApiCardsService', () => {
  let service: ApiCardsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCardsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
