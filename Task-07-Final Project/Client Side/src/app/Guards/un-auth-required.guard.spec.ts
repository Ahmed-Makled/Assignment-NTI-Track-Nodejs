import { TestBed } from '@angular/core/testing';

import { UnAuthRequiredGuard } from './un-auth-required.guard';

describe('UnAuthRequiredGuard', () => {
  let guard: UnAuthRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(UnAuthRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
