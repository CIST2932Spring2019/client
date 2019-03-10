import { TestBed, inject } from '@angular/core/testing';

import { GetPatientLabsService } from './get-patient-labs.service';

describe('GetPatientLabsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetPatientLabsService]
    });
  });

  it('should be created', inject([GetPatientLabsService], (service: GetPatientLabsService) => {
    expect(service).toBeTruthy();
  }));
});
