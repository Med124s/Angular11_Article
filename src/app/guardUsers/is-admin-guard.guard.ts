import { Injectable } from '@angular/core';
import {CanActivate, Router} from '@angular/router';
import { TokenStorage } from '../LocalStorage/token.storage';

@Injectable({
  providedIn: 'root'
})
export class IsAdminGuardGuard implements CanActivate {
  constructor(private tokenStorageService: TokenStorage, private route: Router) {
  }

  canActivate():boolean {
    let isLoggedIn = !!this.tokenStorageService.getTokenStorage();
    if(isLoggedIn){
      const user:any = this.tokenStorageService.getUser();
      if (user.roles.Included("ROLES_ADMIN")){
        console.log("is Admin");
        return true;
      }else{
        console.log('Is not admin');
        this.route.navigate(['/']);
        return false;
      }
    }
    return false;

  }

}
