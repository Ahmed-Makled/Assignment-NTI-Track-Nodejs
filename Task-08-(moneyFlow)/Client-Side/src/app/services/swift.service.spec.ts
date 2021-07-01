import { TestBed } from '@angular/core/testing';

import { SwiftService } from './swift.service';

describe('SwiftService', () => {
  let service: SwiftService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SwiftService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
