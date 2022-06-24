import { DataStateEnum } from "./enum/dataStateEnum";

export interface dataState<T>{
    data:T[] | any;
    errorMessage?:string;
    dataState:DataStateEnum
}