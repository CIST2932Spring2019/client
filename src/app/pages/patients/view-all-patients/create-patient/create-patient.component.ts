import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {
  patient = {
	  patientId: '',
    firstName: '',
    lastName: '',
	isHidden: false
  };
  private url: string = 'http://localhost:44300/api/patients';

  constructor(private http: Http) { }

  ngOnInit() {
  }

  createPatient() {
    this.http.post(this.url, this.patient)
      .subscribe(response => {
        console.log(response.json());
    });
  }
}
