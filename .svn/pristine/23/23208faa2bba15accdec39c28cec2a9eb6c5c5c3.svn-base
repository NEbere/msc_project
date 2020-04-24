import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Platform } from '@ionic/angular';

import { API_URL } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(
    private http: HttpClient
  ) { }

  createTour(userPreference: any): Promise<any> {
    const user = JSON.parse(localStorage.getItem('user'))
    const authHeader = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': user.token
      }
    };

    return this.http.post<any>(`${API_URL}/tour/`, userPreference, authHeader).toPromise()
      .then(response => {
        return response
      })
      .catch(error => {
        console.log(error)
        return false;
      })
  }
}
