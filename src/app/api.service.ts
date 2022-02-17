import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  ping$(): Observable<any> {
    console.log(config.environment.apiUri);
    return this.http.get(`${config.environment.apiUri}/api/external`);
  }

  getPizzas(): Observable<any> {
    return this.http.get(`${config.environment.apiUri}/pizza`);
  }
}
