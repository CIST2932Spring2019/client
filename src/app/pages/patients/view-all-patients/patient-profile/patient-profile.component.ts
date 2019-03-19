import { Component, OnInit } from '@angular/core';
import { GetPatientLabsService } from 'src/app/shared/services/get-patient-labs/get-patient-labs.service';
import { CurrentPatientService } from 'src/app/shared/services/current-patient/current-patient.service';
import { Http } from '@angular/http';

@Component({
  selector: 'patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: any;
  labs: any[];
  isVisible = true;

  private url: string = 'http://localhost:44400/api/labscollection';

  constructor(
    private currentPatientService: CurrentPatientService,
    private getPatientLabsService: GetPatientLabsService,
    private http: Http) {
  }

  ngOnInit() {
    this.patient = this.currentPatientService.getCurrentPatient();

    this.getPatientLabsService.getPatientLabs(this.patient.patientId)
      .subscribe(response => {
        this.labs = response.json();
      })
  }

  softDeleteLab(index: any) {
    this.labs[index].labValue = 123;
    this.http.put(this.url + '/' + this.labs[index].id, this.labs[index])
      .subscribe(response => {
        console.log(response.json());
      });
  }
}
