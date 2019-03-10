import { ViewAllPatientsService } from './../../../shared/services/view-all-patients/view-all-patients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-all-patients.component.html',
  styleUrls: ['./view-all-patients.component.css']
})
export class ViewAllPatientsComponent implements OnInit {
  patients: any[];

  constructor(private viewAllPatientsService: ViewAllPatientsService) {
  }
  
  ngOnInit() {
    this.viewAllPatientsService.getAllPatients()
      .subscribe(response => {
        this.patients = response.json();
      })
  }
}
