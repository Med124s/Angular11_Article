import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Observable, of } from "rxjs";
import { mergeMap,map,catchError } from "rxjs/operators";
import { LoginAction, LoginErrorAction, LoginStateAction, LoginSuccessAction } from "../actions/action.save.login";
import { ActionLoginType } from "../actions/register/login.action";
import { AuthService } from "../services/auth.service";


@Injectable({
    providedIn: 'root'
})

  export class EffectsService{
    constructor(private _loginService:AuthService,private _effectAction:Actions ){
    }

    // registrationEffect:Observable<RegisterSaveAction> = createEffect(
    //     ()=>this._effectAction.pipe(
    //         ofType(ActionsRegisterType.SAVE_REGISTER_STUDENT),
    //         mergeMap((action:SaveRegisterStudentAction)=>{
    //             return this._register.saveInscription(action.payload).pipe(
    //                 map(()=>new SaveRegisterStudentSuccessAction(action.payload),
    //                     console.log("payload user add "+action.payload)),
    //                 catchError((err)=>of(new SaveRegisterStudentErrorAction("error type :" +err.message)))
    //             )
    //         })
    //     )
    // )
    loginEffect:Observable<LoginStateAction> = createEffect(
        ()=>this._effectAction.pipe(
            ofType(ActionLoginType.LOGIN_USER),
            mergeMap((action:LoginAction)=>{
                return this._loginService.login(action.payload).pipe(
                    map((res:any)=>new LoginSuccessAction(
                        res
                    ),
                     ),
                    catchError((err)=>of(new LoginErrorAction("error type :" +err.message)))
                )
            })
        )
    )
  
}


