import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetAllLabTypesService {
  private url: string = 'http://localhost:44400/api/labstype';

  constructor(private http: Http) { }

  getAllLabTypes() {
    return this.http.get(this.url);
  }
}
