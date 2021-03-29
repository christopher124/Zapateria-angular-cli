import { TestBed } from '@angular/core/testing';

import { GuardiaRolGuard } from './guardia-rol.guard';

describe('GuardiaRolGuard', () => {
  let guard: GuardiaRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
