import { TestBed } from '@angular/core/testing';

import { MuHttpInterceptor } from './mu-http.interceptor';

describe('MuHttpInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      MuHttpInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: MuHttpInterceptor = TestBed.inject(MuHttpInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
