import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { PlayslistsService } from './playslists.service';

describe('PlayslistsService', () => {
  let service: PlayslistsService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlayslistsService]
    });
    httpMock = TestBed.inject(HttpTestingController);
    service = TestBed.inject(PlayslistsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
