import { TestBed } from '@angular/core/testing';

import { AuthRequiredGuard } from './auth-required.guard';

describe('AuthRequiredGuard', () => {
  let guard: AuthRequiredGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AuthRequiredGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
