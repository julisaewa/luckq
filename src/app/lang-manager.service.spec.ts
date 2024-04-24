import { TestBed } from '@angular/core/testing';

import { LangManagerService } from './lang-manager.service';

describe('LangManagerService', () => {
  let service: LangManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LangManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
