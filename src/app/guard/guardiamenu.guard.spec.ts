import { TestBed } from '@angular/core/testing';

import { GuardiamenuGuard } from './guardiamenu.guard';

describe('GuardiamenuGuard', () => {
  let guard: GuardiamenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardiamenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
