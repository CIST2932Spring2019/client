import { ViewPatientsService } from './../../../shared/services/view-patients/view-patients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  patients: any[];

  constructor(private viewPatientsService: ViewPatientsService) {
  }

  someProperty: string = '';
  
  ngOnInit() {
    this.viewPatientsService.getAllPatients()
      .subscribe(response => {
        this.patients = response.json();
      })
  }

}
