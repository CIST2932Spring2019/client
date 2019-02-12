import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { PatientsComponent } from './pages/patients/patients.component';
import { LabsComponent } from './pages/labs/labs.component';
import { PharmacistsComponent } from './pages/pharmacists/pharmacists.component';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    PatientsComponent,
    LabsComponent,
    PharmacistsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
