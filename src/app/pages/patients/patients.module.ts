import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PatientsRoutingModule } from './patients-routing.module';
import { PatientsComponent } from './view-patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { PatientProfileComponent } from './patient-profile/patient-profile.component';

@NgModule({
  imports: [
    CommonModule,
    PatientsRoutingModule
  ],
  declarations: [
    PatientsComponent,
    CreatePatientComponent,
    PatientProfileComponent
  ]
})
export class PatientsModule { }
