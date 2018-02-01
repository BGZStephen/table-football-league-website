import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class DashboardApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization.dashboard;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  users = {
    get: (options) => this.apiCall('/private/users/:userId', 'get', options),
    getFixtures: (options) => this.apiCall('/private/users/:userId/fixtures', 'post', options),
    getLeagues: (options) => this.apiCall('/private/users/:userId/leagues', 'post', options),
    getByEmail: (options) => this.apiCall('/private/users/getByEmail', 'post', options),
    delete: (options) => this.apiCall('/private/users/:userId/leagues', 'delete', options),
    update: (options) => this.apiCall('/private/users/:userId', 'put', options),
    search: (options) => this.apiCall('/private/users/search', 'get', options),
  }

  leagues = {
    get: (options) => this.apiCall('/private/leagues/:leagueId', 'get', options),
    getAll: (options) => this.apiCall('/private/leagues', 'get', options),
    create: (options) => this.apiCall('/private/leagues', 'post', options),
    delete: (options) => this.apiCall('/private/leagues/:leagueId', 'delete', options),
    update: (options) => this.apiCall('/private/leagues/:leagueId', 'put', options),
    search: (options) => this.apiCall('/private/leagues/search', 'get', options),
  }

  teams = {
    get: (options) => this.apiCall('/private/teams/:teamId', 'get', options),
    getAll: (options) => this.apiCall('/private/teams', 'get', options),
    create: (options) => this.apiCall('/private/teams', 'post', options),
    delete: (options) => this.apiCall('/private/teams/:teamId', 'delete', options),
    update: (options) => this.apiCall('/private/teams/:teamId', 'put', options),
    search: (options) => this.apiCall('/private/teams/search', 'get', options),
  }

  fixtures = {
    get: (options) => this.apiCall('/private/fixtures/:fixtureId', {type: 'get'}, options),
    getAll: (options) => this.apiCall('/private/fixtures', 'get', options),
    create: (options) => this.apiCall('/private/fixtures', 'post', options),
    delete: (options) => this.apiCall('/private/fixtures/:fixtureId', 'delete', options),
    update: (options) => this.apiCall('/private/fixtures/:fixtureId', 'put', options),
  }

  apiCall(url, callType, options) {
    let queryParams = '';

    if (callType === 'post' && !options.body) {
      options.body = {};
    }

    if (options.params) {
      url = this.setUrlParams(url, options.params);
    }

    if (options.query) {
      queryParams = this.parseQueryParams(options.query);
      url += `${queryParams}`
    }

    const jwt = localStorage.getItem('token');
    let headers = new HttpHeaders({'Authorization': `${this.authorization}`});
    if (jwt) {
      headers = headers.set('token', jwt);
    }

    return this.http[callType](`${this.baseUrl}${url}`, options.body ? options.body : {headers: headers}, options.body ? {headers: headers} : undefined);
  }

  parseQueryParams(queryParams) {
    let query = '?'
    for (const param of Object.keys(queryParams)) {
      query += `${param}=${queryParams[param]}&`;
    }
    return query;
  }

  setUrlParams(url, params) {
    for (const param of Object.keys(params)) {
      const urlParam = `:${param}`;
      const paramRegexp = new RegExp(urlParam, 'g');
      url = url.replace(paramRegexp, params[param]);
    }
    return url;
  }
}
