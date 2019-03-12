import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, Router } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/home/login/login.component';
import { LabsComponent } from './pages/labs/labs.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PharmacistOverviewComponent } from './pages/pharmacist-overview/pharmacist-overview.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCheckboxModule } from '@angular/material/checkbox';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'patients', loadChildren: './pages/patients/patients.module#PatientsModule' },
  { path: 'labs', component: LabsComponent },
  { path: 'overview', component: PharmacistOverviewComponent },
  { path: '**', component: NotFoundComponent }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatCheckboxModule
  ],
  declarations: [
    HomeComponent,
    LoginComponent,
    LabsComponent,
    PharmacistOverviewComponent,
    NotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
