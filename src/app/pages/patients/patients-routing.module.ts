import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViewAllPatientsComponent } from './view-all-patients/view-all-patients.component';
import { PatientProfileComponent } from './view-all-patients/patient-profile/patient-profile.component';
import { CreatePatientComponent } from './view-all-patients/create-patient/create-patient.component';
import { CreatePatientLabComponent } from './view-all-patients/create-patient-lab/create-patient-lab.component';

const routes: Routes = [
  { path: '', component: ViewAllPatientsComponent },
  { path: 'newLab', component: CreatePatientLabComponent },
  { path: 'new', component: CreatePatientComponent },
  { path: ':patientID', component: PatientProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PatientsRoutingModule { }