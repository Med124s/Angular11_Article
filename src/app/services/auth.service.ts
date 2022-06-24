import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';
import { TokenStorage } from '../LocalStorage/token.storage';
import { Login } from '../Models/Login.model';


const AUTH_API = environment.host_url+"auth/";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private tokenStorageService: TokenStorage) { }

  login(user:Login): Observable<any> {
    console.log("Username : " + user.username);
    return this.http.post(AUTH_API + 'signin',user, httpOptions);
  }

  register(username: string, email: string, password: string): Observable<any> {
    return this.http.post(AUTH_API + 'signup', {
      username,
      email,
      password
    }, httpOptions);
  }

  isAuthenticated(){
    return !!this.tokenStorageService.getTokenStorage();
  }
}
