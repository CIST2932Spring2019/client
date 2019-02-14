import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {
  patients: any[];

  constructor(http: Http) {
    http.get('https://my.api.mockaroo.com/patients.json?key=a2040a30')
      .subscribe(response => {
        this.patients = response.json();
      })
  }

  ngOnInit() {
  }

}
