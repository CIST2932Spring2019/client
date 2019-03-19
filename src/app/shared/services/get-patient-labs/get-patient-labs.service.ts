import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CurrentPatientService } from '../current-patient/current-patient.service';

@Injectable({
  providedIn: 'root'
})
export class GetPatientLabsService {
  currentPatient: any = this.currentPatientService.getCurrentPatient();
  private url: string = 'https://labsapi.azurewebsites.net/api/labscollection';

  constructor(
    private http: Http,
    private currentPatientService: CurrentPatientService) {
  }
  
  getPatientLabs(patientId: string) {
    console.log(this.http.get(this.url + '/' + patientId));
    return this.http.get(this.url + '/' + patientId);
  }
}