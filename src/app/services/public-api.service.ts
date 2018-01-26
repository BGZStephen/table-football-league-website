import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'environments/environment';
import 'rxjs/add/operator/map';

@Injectable()
export class PublicApiService {

  baseUrl: string = environment.apiUrl;
  authorization: String = environment.authorization.website;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) {}

  users = {
    create: (options) => this.apiCall('/public/users', 'post', options),
    authenticate: (options) => this.apiCall('/public/users/authenticate', 'post', options),
  }

  website = {
    contactForm: (options) => this.apiCall('/public/users/contact-form', 'post', options),
  }

  apiCall(url, callType, options) {
    let queryParams = '';

    if (options.params) {
      url = this.setUrlParams(url, options.params);
    }

    if (options.query) {
      queryParams = this.parseQueryParams(options.query);
      url += `/${queryParams}`
    }

    const jwt = localStorage.getItem('token');
    let headers = new HttpHeaders({'Authorization': `${this.authorization}`});
    if (jwt) {
      headers = headers.set('token', jwt);
    }

    return this.http[callType](`${this.baseUrl}${url}`, options.body ? options.body : {headers: headers}, options.body ? {headers: headers} : undefined);
  }

  parseQueryParams(queryParams) {
    let query = ''
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
