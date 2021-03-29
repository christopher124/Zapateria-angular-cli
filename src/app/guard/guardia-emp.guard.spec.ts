import { TestBed } from '@angular/core/testing';

import { GuardiaEmpGuard } from './guardia-emp.guard';

describe('GuardiaEmpGuard', () => {
  let guard: GuardiaEmpGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiaEmpGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
