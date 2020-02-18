import { TestBed } from '@angular/core/testing';

import { PokéAPIService } from './pokéapi.service';

describe('PokéAPIService', () => {
  let service: PokéAPIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PokéAPIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
