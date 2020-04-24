import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Platform } from '@ionic/angular';

import { API_URL } from '../environments/environment'

const httpOptions = {
  headers: {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Authorization': ''
  }
};

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(
    private http: HttpClient,
    private platform: Platform
  ) {
    const loggedInUser = JSON.parse(localStorage.getItem('user'))
  }

  isUserAuthenticated(): boolean {
    return true;
  }

  getUserFromStorage() {
    return JSON.parse(localStorage.getItem('user'))
  }

  authHttpOption(httpOptions) {
    const authHeaders = httpOptions;
    const user = JSON.parse(localStorage.getItem('user'))
    return authHeaders['headers']['Authorization'] = user.token;
  }

  getUserProfile() {
    const user = JSON.parse(localStorage.getItem('user'))
    const authHeader = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': user.token
      }
    };

    return this.http.get<any>(`${API_URL}/users/profile `, authHeader).toPromise()
  }

  loginUser(loginCredentials: any): Promise<any> {
    return this.http.post<any>(`${API_URL}/users/login `, loginCredentials, httpOptions).toPromise()
      .then(response => {
        if (response.success) {
          localStorage.setItem("user", JSON.stringify(response));
          return true
        }
      })
      .catch(error => {
        console.log(error, 'error logging user in')
        return false;
      })
  }

  createUser(userCredentials: any): Promise<any> {
    return this.http.post<any>(`${API_URL}/users/ `, userCredentials, httpOptions).toPromise()
      .then(response => {
        if (response.status == 200 && response.response.id) {
          return this.loginUser({ email: userCredentials.email, password: userCredentials.password })
        }
      })
      .catch(error => {
        console.log(error, 'error creating user')
        return false;
      })
  }

  updateUserProfile(userData: any): Promise<any> {
    const user = JSON.parse(localStorage.getItem('user'))
    const authHeader = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': user.token
      }
    };
    return this.http.put<any>(`${API_URL}/users/${userData.id} `, userData, authHeader).toPromise();
  }

}
