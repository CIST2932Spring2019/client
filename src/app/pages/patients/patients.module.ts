import { MaterialModule } from './../../shared/material/material.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { CreatePatientComponent } from './view-all-patients/create-patient/create-patient.component';
import { PatientProfileComponent } from './view-all-patients/patient-profile/patient-profile.component';
import { CreatePatientLabComponent } from './view-all-patients/patient-profile/create-patient-lab/create-patient-lab.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    ViewAllPatientsComponent,
    CreatePatientComponent,
    PatientProfileComponent,
    CreatePatientLabComponent
  ]
})
export class PatientsModule { }
