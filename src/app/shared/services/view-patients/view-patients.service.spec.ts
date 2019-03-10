import { TestBed, inject } from '@angular/core/testing';

import { ViewPatientsService } from './view-patients.service';

describe('ViewPatientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewPatientsService]
    });
  });

  it('should be created', inject([ViewPatientsService], (service: ViewPatientsService) => {
    expect(service).toBeTruthy();
  }));
});
