import { CurrentPatientService } from './../../../../../shared/services/current-patient/current-patient.service';
import { Component, OnInit } from '@angular/core';
import { GetAllLabTypesService } from 'src/app/shared/services/get-all-lab-types/get-all-lab-types.service';
import { Http } from '@angular/http';

@Component({
  selector: 'create-patient-lab',
  templateUrl: './create-patient-lab.component.html',
  styleUrls: ['./create-patient-lab.component.css']
})
export class CreatePatientLabComponent implements OnInit {
  patient: any;
  labTypes = [];
  labs = [];
  labsInitialized = false;

  private url: string = 'http://localhost:44400/api/labscollection';

  constructor(
    private http: Http,
    private currentPatientService: CurrentPatientService,
    private getAllLabTypesService: GetAllLabTypesService) {
  }

  ngOnInit() {
    this.patient = this.currentPatientService.getCurrentPatient();

    this.getAllLabTypesService.getAllLabTypes()
      .subscribe(response => {
        this.labTypes = response.json();
      });
  }

  initializeLabs() {
    let todayDate = new Date();
    let todayDateISO = todayDate.toISOString();
    if (this.labsInitialized === false) {
      for (let index = 0; index < this.labTypes.length; index++) {
        this.labs[index] = {
          patientId: this.patient.patientId,
          labType: this.labTypes[index].labType,
          labValue: 0,
          date: todayDateISO,
          isHidden: false
        };
      };
      this.labsInitialized = true;
    }
  }

  onValueChanged(index: any, event: any) {
    this.labs[index].labValue = parseFloat(event.target.value);
  }

  postLabs() {
    for (let index = 0; index < this.labs.length; index++) {
      if (this.labs[index].labValue > 0) {
        this.http.post(this.url, this.labs[index])
          .subscribe(response => {
            console.log(response.json());
        });
      }
    }
  }
}