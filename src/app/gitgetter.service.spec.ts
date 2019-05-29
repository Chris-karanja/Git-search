import { TestBed } from '@angular/core/testing';

import { GitgetterService } from './gitgetter.service';

describe('GitgetterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GitgetterService = TestBed.get(GitgetterService);
    expect(service).toBeTruthy();
  });
});
