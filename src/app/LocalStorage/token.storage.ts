import { Injectable } from "@angular/core";

const KEY_TOKEN = "auth_token";
const KEY_USER = "auth_user"
@Injectable({
    providedIn: 'root'
  })

export class TokenStorage{


    constructor(){}

    saveTokenStorage(token:string):void{
        localStorage.removeItem(KEY_TOKEN);
        localStorage.setItem(KEY_TOKEN,token);
    }
    userStorage(user:any):void{
        localStorage.removeItem(KEY_USER);
        localStorage.setItem(KEY_USER,JSON.stringify(user));
    }

    getTokenStorage():string|null{
        return localStorage.getItem(KEY_TOKEN);
    }
    getUser():any{
        let user = JSON.parse(localStorage.getItem(KEY_USER))
        if(user){
            return user;
        }
        return {} ;
    }
    signOut(){
        localStorage.clear();
    }

}