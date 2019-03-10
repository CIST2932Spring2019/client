import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CurrentPatientService {
  private currentPatient = {
    lastName: "Le Franc",
    firstName: "Brinna",
    patientID: "2028600756"
  };

  constructor() {
  }

  setCurrentPatient(patient: any) {      
    this.currentPatient = patient;  
  }
  
  getCurrentPatient() {  
    return this.currentPatient;  
  }
}
