import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class GetPatientLabsService {
  private url: string = 'https://my.api.mockaroo.com/labs_v2.json?key=a2040a30';

  constructor(private http: Http) {
  }
  
  getPatientLabs() {
    return this.http.get(this.url);
  }
}
