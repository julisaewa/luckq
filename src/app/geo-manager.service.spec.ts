import { TestBed } from '@angular/core/testing';

import { GeoManagerService } from './geo-manager.service';

describe('GeoManagerService', () => {
  let service: GeoManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeoManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
