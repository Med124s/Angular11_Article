import { Injectable } from '@angular/core';
import {  CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { TokenStorage } from '../LocalStorage/token.storage';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private _route:Router,private _tokenStorage:TokenStorage){}
  canActivate(): boolean {
     if(!this._tokenStorage.getTokenStorage()){
       this._route.navigateByUrl('/auth/login');
       return false;
     }
     return true;
  }

}
