import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { LabsComponent } from './pages/labs/labs.component';
import { PharmacistsComponent } from './pages/pharmacists/pharmacists.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';

const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'login', component: LoginComponent },
    { path: 'patients', component: PatientsComponent },
    { path: 'labs', component: LabsComponent },
    { path: 'pharmacists', component: PharmacistsComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    PatientsComponent,
    LabsComponent,
    PharmacistsComponent,
    NotFoundComponent
  ]
})
export class AppRoutingModule { }
