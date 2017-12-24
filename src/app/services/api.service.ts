import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  users = {
    create: (user) => {
      const callParams = {type: 'post', url: '/users', body: user}
      return this.apiCall(callParams);
    },

    authenticate: (user) => {
      const callParams = {type: 'post', url: '/users/authenticate', body: user}
      return this.apiCall(callParams);
    },
  }

  website = {
    contactForm: (message) => {
      const callParams = {type: 'post', url: '/website/contact-form', body: message}
      return this.apiCall(callParams);
    },
  }

  apiCall(callParams) {
    const jwt = localStorage.getItem('token');
    let headers = new HttpHeaders({'Authorization': `${this.authorization}`});
    if(jwt) {
      headers = headers.set('token', jwt);
    }
    return this.http[callParams.type](`${this.baseUrl}${callParams.url}`, callParams.body ? callParams.body : {headers: headers}, callParams.body ? {headers: headers} : null);
  }
}
