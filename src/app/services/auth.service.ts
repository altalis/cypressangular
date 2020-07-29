import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const BASE_URL_AUTH: string = 'localhost:3000/api/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  login(params) {
    return this.http.post(`${BASE_URL_AUTH}/login`, params);
  }
}
