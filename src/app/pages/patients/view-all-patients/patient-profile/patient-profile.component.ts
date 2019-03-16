import { Component, OnInit } from '@angular/core';
import { GetPatientLabsService } from 'src/app/shared/services/get-patient-labs/get-patient-labs.service';
import { CurrentPatientService } from 'src/app/shared/services/current-patient/current-patient.service';

@Component({
  selector: 'patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: any;
  labs: any[];

  isVisible = true;

  constructor(
    private currentPatientService: CurrentPatientService,
    private getPatientLabsService: GetPatientLabsService) {
  }

  ngOnInit() {
    this.patient = this.currentPatientService.getCurrentPatient();

    this.getPatientLabsService.getPatientLabs(this.patient.patientId)
      .subscribe(response => {
        this.labs = response.json();
      })
  }
}
