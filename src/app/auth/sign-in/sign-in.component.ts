import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { TokenStorage } from 'src/app/LocalStorage/token.storage';
import { Login } from 'src/app/Models/Login.model';
import { dataState } from 'src/app/state/dataState';
import { DataStateEnum } from 'src/app/state/enum/dataStateEnum';
import { StoreDispatcher } from 'src/app/store/dispatcher.store';


@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

/** Error when invalid control is dirty, touched, or submitted. */
export class SignInComponent implements OnInit {
  hide:boolean = true;
  loginForm: FormGroup;
  login$:Observable<dataState<Login>> | null= null
  jwtResponse:string;

  private state = new BehaviorSubject<DataStateEnum>(null);
  state$ = this.state.asObservable();
    readonly dataStateEnum = DataStateEnum;
  constructor(private _store:Store<any>,
              private _storeDispatcher:StoreDispatcher,
              private _tokenStorage:TokenStorage,
              private _route:Router){}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('',[Validators.required]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }
  onLogin(user:Login){
    this._storeDispatcher.dispatcherLogin(user);
    this.login$ = this._store.pipe(
      map((state)=> state.loginState)
    )
    this.login$.subscribe(data=>{
       this.state.next(data.dataState);
       this._tokenStorage.saveTokenStorage(data.data.token)
       this._tokenStorage.userStorage(data.data)
       if(data.dataState == this.dataStateEnum.LOADED){
        this._route.navigateByUrl('/articles')
       }
      })

  }
}
