import { TestBed } from '@angular/core/testing';

import { PlayslistsService } from './playslists.service';

describe('PlayslistsService', () => {
  let service: PlayslistsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlayslistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
