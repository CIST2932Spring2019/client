import { Http } from '@angular/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {
  patient: any[];

  private url: string;

  constructor(private route: ActivatedRoute, private http: Http) {
    http.get(this.url)
      .subscribe(response => {
        this.patient = response.json();
      })
  }

  ngOnInit() {
    this.url = window.location.href.toString();
    console.log(this.url);
  }
}
