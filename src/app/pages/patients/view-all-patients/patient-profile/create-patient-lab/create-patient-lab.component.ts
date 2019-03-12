import { Component, OnInit } from '@angular/core';
import {  Location } from '@angular/common';

@Component({
  selector: 'create-patient-lab',
  templateUrl: './create-patient-lab.component.html',
  styleUrls: ['./create-patient-lab.component.css']
})
export class CreatePatientLabComponent implements OnInit {
  lab: any;
  private url = 'http://localhost:44300/labs';

  constructor(private location: Location) { }

  ngOnInit() {
  }

  goBackClicked() {
    this.location.back();
  }

  createPost(labEntry: HTMLInputElement) {

  }
}
