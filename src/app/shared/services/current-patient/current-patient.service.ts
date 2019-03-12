import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {
  private currentPatient = {};

  constructor() {
  }

  setCurrentPatient(patient: any) {      
    this.currentPatient = patient;  
  }
  
  getCurrentPatient() {  
    return this.currentPatient;  
  }
}
