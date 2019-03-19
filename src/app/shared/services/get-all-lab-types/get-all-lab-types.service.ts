import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllLabTypesService {
  private url: string = 'https://labsapi.azurewebsites.net/api/labstype';

  constructor(private http: Http) { }

  getAllLabTypes() {
    return this.http.get(this.url);
  }
}
