import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { TokenStorage } from '../LocalStorage/token.storage';

@Injectable({
  providedIn: 'root'
})
export class LoggedGuardGuard implements CanActivate {

  constructor(private tokenStorageService: TokenStorage, private route: Router) {
  }

  canActivate(): boolean {
    let isLoggedIn = !!this.tokenStorageService.getTokenStorage();
    if(isLoggedIn){
      return true;
    }else {
      this.route.navigate(['/']);
      return false;
    }
  }

}
