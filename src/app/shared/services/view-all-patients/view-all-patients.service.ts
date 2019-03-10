import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ViewAllPatientsService {
  private url: string = 'http://sprandapp.azurewebsites.net/api/patients';

  constructor(private http: Http) {
  }
  
  getAllPatients() {
    return this.http.get(this.url);
  }
}