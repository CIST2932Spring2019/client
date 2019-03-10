import { TestBed, inject } from '@angular/core/testing';
import { ViewAllPatientsService } from './view-all-patients.service';

describe('ViewAllPatientsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ViewAllPatientsService]
    });
  });

  it('should be created', inject([ViewAllPatientsService], (service: ViewAllPatientsService) => {
    expect(service).toBeTruthy();
  }));
});
