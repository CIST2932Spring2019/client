import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  // styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[];

  private url: string = 'http://sprandapp.azurewebsites.net/api/patients';

  constructor(private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.patients = response.json();
      })
  }
  
  ngOnInit() {
  }

  createPatient(input: HTMLInputElement) {
    let patient = {
      firstName: input.value,
      lastName: input.value
    }

    input.value = '';

    this.patients.splice(0, 0, patient);
  }
}