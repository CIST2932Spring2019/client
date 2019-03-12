import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { GetAllLabTypesService } from 'src/app/shared/services/get-all-lab-types/get-all-lab-types.service';

@Component({
  selector: 'create-patient-lab',
  templateUrl: './create-patient-lab.component.html',
  styleUrls: ['./create-patient-lab.component.css']
})
export class CreatePatientLabComponent implements OnInit {
  labTypes: any[];

  constructor(
    private location: Location,
    private getAllLabTypesService: GetAllLabTypesService) {
  }

  ngOnInit() {
    this.getAllLabTypesService.getAllLabTypes()
      .subscribe(response => {
        this.labTypes = response.json();
      })
  }

  goBackClicked() {
    this.location.back();
  }
}
