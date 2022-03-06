import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as config from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) { }

  ping$(): Observable<any> {
    console.log(config.environment.apiUri);
    return this.http.get(`${config.environment.apiUri}/api/external`);
  }

  getPizzas(): Observable<any> {
    return this.http.get(`${config.environment.apiUri}/api/pizza`);
  }

  orderPizza(userId: string, userOrders: any[]): Observable<any> {
    return this.http.post(`${config.environment.apiUri}/api/order`, { user_id: userId, orders: userOrders });
  }
  verifyEmail(userId: string): Observable<any> {
    const body = {
      user_id: userId
    };
    return this.http.post(`${config.environment.apiUri}/api/verification-email`, body);
  }

  changePassword(userId: string, redirectUri: string): Observable<any> {
    const body = {
      user_id: userId,
      result_url: redirectUri
    };
    return this.http.post(`${config.environment.apiUri}/api/change-password`, body);
  }

  deleteAccount(userId: string): Observable<any> {
    const body = {
      user_id: userId
    };
    return this.http.post(`${config.environment.apiUri}/api/delete-account`, body);
  }
}
