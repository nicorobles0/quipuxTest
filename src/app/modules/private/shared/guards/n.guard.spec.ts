import { TestBed } from '@angular/core/testing';

import { NGuard } from './n.guard';

describe('NGuard', () => {
  let guard: NGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
