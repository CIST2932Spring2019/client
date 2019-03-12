import { TestBed, inject } from '@angular/core/testing';

import { GetAllLabTypesService } from './get-all-lab-types.service';

describe('GetAllLabTypesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetAllLabTypesService]
    });
  });

  it('should be created', inject([GetAllLabTypesService], (service: GetAllLabTypesService) => {
    expect(service).toBeTruthy();
  }));
});
