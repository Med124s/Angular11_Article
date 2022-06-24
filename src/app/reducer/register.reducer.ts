import { Action } from "@ngrx/store";
import { LoginErrorAction, LoginSuccessAction } from "../actions/action.save.login";
import { ActionLoginType } from "../actions/register/login.action";
import { Login } from "../Models/Login.model";

import { dataState } from "../state/dataState";
import { DataStateEnum } from "../state/enum/dataStateEnum";

// export const initialRegistrationState:dataState<Login> = {
//     data:[],
//     errorMessage:"",
//     dataState:DataStateEnum.INITIAL
// }
// export function reducerRegister(state:dataState<Login> = initialRegistrationState,action:Action):dataState<Registration>{
//     switch(action.type){
//         case ActionsRegisterType.SAVE_REGISTER_STUDENT:
//             return {...state,dataState:DataStateEnum.LOADING}
//         case ActionsRegisterType.SAVE_REGISTER_STUDENT_SUCCESS:
//             console.log("register user here************* in reducer");
//             let registerUser:Registration = (<SaveRegisterStudentAction>action).payload;
//             let allRegisters:Registration[] = [...state.data,registerUser];
//             return {...state,dataState:DataStateEnum.LOADED,data:allRegisters}
//         case ActionsRegisterType.SAVE_REGISTER_STUDENT_ERROR:
//             return {...state,dataState:DataStateEnum.ERROR,errorMessage:(<SaveRegisterStudentErrorAction>action).payload}
        
//        default:return state;

//     }
// }
export const initialLogin:dataState<Login> = {
    data:{},
    errorMessage:"",
    dataState:DataStateEnum.INITIAL
}
export function reducerLogin(state:dataState<Login> = initialLogin,action:Action):dataState<Login>{
    
    switch(action.type){
        case ActionLoginType.LOGIN_USER:
            return {...state,dataState:DataStateEnum.LOADING}
        case ActionLoginType.LOGIN_USER_SUCCESS:
            return {...state,dataState:DataStateEnum.LOADED,data:(<LoginSuccessAction>action).payload}
        case ActionLoginType.LOGIN_USER_ERROR:
            return {...state,dataState:DataStateEnum.ERROR,errorMessage:(<LoginErrorAction>action).payload}
       default:return state;
    }
}