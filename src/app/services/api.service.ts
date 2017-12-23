import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization;
  adminAuthorization: String = environment.adminAuthorization;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  leagues = {
    get: (id) => {
      const callParams = {type: 'get', url: `/leagues/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/leagues'}
      return this.apiCall(callParams);
    },

    create: (league) => {
      const callParams = {type: 'post', url: '/leagues', body: league}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/leagues/${id}`}
      return this.apiCall(callParams);
    },

    update: (league) => {
      const callParams = {type: 'put', url: `/leagues/${league._id}`, body: league}
      return this.apiCall(callParams);
    },
  }

  teams = {
    get: (id) => {
      const callParams = {type: 'get', url: `/teams/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/teams'}
      return this.apiCall(callParams);
    },

    create: (team) => {
      const callParams = {type: 'post', url: '/teams', body: team}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/teams/${id}`}
      return this.apiCall(callParams);
    },

    update: (team) => {
      const callParams = {type: 'put', url: `/teams/${team._id}`, body: team}
      return this.apiCall(callParams);
    },
  }

  fixtures = {
    get: (id) => {
      const callParams = {type: 'get', url: `/fixtures/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/fixtures'}
      return this.apiCall(callParams);
    },

    create: (fixture) => {
      const callParams = {type: 'post', url: '/fixtures', body: fixture}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/fixtures/${id}`}
      return this.apiCall(callParams);
    },

    update: (fixture) => {
      const callParams = {type: 'put', url: `/fixtures/${fixture._id}`, body: fixture}
      return this.apiCall(callParams);
    },
  }

  users = {
    get: (id) => {
      const callParams = {type: 'get', url: `/private/users/${id}`}
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {type: 'get', url: '/admin/users'}
      return this.apiCall(callParams);
    },

    create: (user) => {
      const callParams = {type: 'post', url: '/users', body: user}
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {type: 'delete', url: `/users/${id}`}
      return this.apiCall(callParams);
    },

    update: (user) => {
      const callParams = {type: 'put', url: `/users/${user._id}`, body: user}
      return this.apiCall(callParams);
    },

    authenticate: (user) => {
      const callParams = {type: 'post', url: '/users/authenticate', body: user}
      return this.apiCall(callParams);
    },

    authenticateAdminUser: (user) => {
      const callParams = {type: 'post', url: '/admin/users/authenticate', body: user}
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
    let headers = new HttpHeaders({'Authorization': `${callParams.authorization || this.authorization}`});
    if(jwt) {
      headers = headers.set('token', jwt);
    }
    return this.http[callParams.type](`${this.baseUrl}${callParams.url}`, callParams.body ? callParams.body : {headers: headers}, callParams.body ? {headers: headers} : null);
  }
}
