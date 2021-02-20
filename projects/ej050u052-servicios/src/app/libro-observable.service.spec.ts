import { TestBed } from '@angular/core/testing';

import { LibroObservableService } from './libro-observable.service';

describe('LibroObservableService', () => {
  let service: LibroObservableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LibroObservableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
