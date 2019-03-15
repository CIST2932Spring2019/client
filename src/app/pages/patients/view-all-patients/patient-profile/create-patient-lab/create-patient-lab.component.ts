import { CurrentPatientService } from './../../../../../shared/services/current-patient/current-patient.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetAllLabTypesService } from 'src/app/shared/services/get-all-lab-types/get-all-lab-types.service';


@Component({
  selector: 'create-patient-lab',
  templateUrl: './create-patient-lab.component.html',
  styleUrls: ['./create-patient-lab.component.css']
})
export class CreatePatientLabComponent implements OnInit {
  patient: any;
  labTypes: any[];

  constructor(
    private location: Location,
    private currentPatientService: CurrentPatientService,
    private getAllLabTypesService: GetAllLabTypesService) {
  }

  ngOnInit() {
    this.patient = this.currentPatientService.getCurrentPatient();

    this.getAllLabTypesService.getAllLabTypes()
      .subscribe(response => {
        this.labTypes = response.json();
      })
  }

  goBackClicked() {
    this.location.back();
  }
}
