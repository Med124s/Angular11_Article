import { Action } from "@ngrx/store";
import { Login } from "../Models/Login.model";
import { JwtResponse } from "../response/jwtResponse.token";
import { ActionLoginType } from "./register/login.action";

export class LoginAction implements Action{
    type: ActionLoginType = ActionLoginType.LOGIN_USER;
    constructor(public payload:Login){}
}
export class LoginSuccessAction implements Action{
    type: ActionLoginType = ActionLoginType.LOGIN_USER_SUCCESS;
    constructor(public payload:JwtResponse){}
}
export class LoginErrorAction implements Action{
    type: ActionLoginType = ActionLoginType.LOGIN_USER_ERROR;
    constructor(public payload:string){}
}
export type LoginStateAction=
LoginAction | LoginSuccessAction |LoginErrorAction;