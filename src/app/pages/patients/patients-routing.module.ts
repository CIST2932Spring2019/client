import { PatientProfileComponent } from './patient-profile/patient-profile.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PatientsComponent } from './view-patients/patients.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';

const routes: Routes = [
  { path: '', component: PatientsComponent },
  { path: 'new', component: CreatePatientComponent },
  { path: ':patientID', component: PatientProfileComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class PatientsRoutingModule { }