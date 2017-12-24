import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  baseUrl: string = environment.apiUrl;
  websiteAuth: String = environment.authorization.website;
  dashboardAuth: String = environment.authorization.dashboard;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  users = {
    create: (user) => {
      const callParams = {
        type: 'post',
        url: '/users',
        body: user,
        auth: this.websiteAuth,
      }
      return this.apiCall(callParams);
    },

    get: (id) => {
      const callParams = {
        type: 'get',
        url: `/private/users/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {
        type: 'get',
        url: '/admin/users',
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {
        type: 'delete',
        url: `/users/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    update: (user) => {
      const callParams = {
        type: 'put',
        url: `/users/${user._id}`,
        body: user,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    authenticate: (user) => {
      const callParams = {
        type: 'post',
        url: '/users/authenticate',
        body: user,
        auth: this.websiteAuth,
      }
      return this.apiCall(callParams);
    },
  }

  leagues = {
    get: (id) => {
      const callParams = {
        type: 'get',
        url: `/leagues/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {
        type: 'get',
        url: '/admin/leagues',
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    create: (league) => {
      const callParams = {
        type: 'post',
        url: '/leagues', body: league,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {
        type: 'delete',
        url: `/leagues/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    update: (league) => {
      const callParams = {
        type: 'put',
        url: `/leagues/${league._id}`, body: league,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },
  }

  teams = {
    get: (id) => {
      const callParams = {
        type: 'get',
        url: `/teams/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {
        type: 'get',
        url: '/admin/teams',
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    create: (team) => {
      const callParams = {
        type: 'post',
        url: '/teams', body: team,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {
        type: 'delete',
        url: `/teams/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    update: (team) => {
      const callParams = {
        type: 'put',
        url: `/teams/${team._id}`,
        body: team,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },
  }

  fixtures = {
    get: (id) => {
      const callParams = {
        type: 'get',
        url: `/fixtures/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    getAll: () => {
      const callParams = {
        type: 'get',
        url: '/admin/fixtures',
        auth: this.dashboardAuth
      }
      return this.apiCall(callParams);
    },

    create: (fixture) => {
      const callParams = {
        type: 'post',
        url: '/fixtures',
        body: fixture,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    delete: (id) => {
      const callParams = {
        type: 'delete',
        url: `/fixtures/${id}`,
        auth: this.dashboardAuth,
      }
      return this.apiCall(callParams);
    },

    update: (fixture) => {
      const callParams = {
        type: 'put',
        url: `/fixtures/${fixture._id}`,
        body: fixture,
        auth: this.dashboardAuth
      }
      return this.apiCall(callParams);
    },
  }

  website = {
    contactForm: (message) => {
      const callParams = {
        type: 'post',
        url: '/website/contact-form',
        body: message,
        auth: this.websiteAuth
      }
      return this.apiCall(callParams);
    },
  }

  apiCall(callParams) {
    const jwt = localStorage.getItem('token');
    let headers = new HttpHeaders({'Authorization': `${callParams.auth}`});
    if(jwt) {
      headers = headers.set('token', jwt);
    }
    return this.http[callParams.type](`${this.baseUrl}${callParams.url}`, callParams.body ? callParams.body : {headers: headers}, callParams.body ? {headers: headers} : null);
  }
}
