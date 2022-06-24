import { Injectable } from "@angular/core"
import { Store } from "@ngrx/store"
import { LoginAction } from "../actions/action.save.login";
import { Login } from "../Models/Login.model";


@Injectable({
    providedIn: 'root'
  })
export class StoreDispatcher{
    constructor(private store:Store<any>){}

    // dispatcherRegistration(register:Registration){
    //     this.store.dispatch(new SaveRegisterStudentAction(register));
    // }
    dispatcherLogin(login:Login){
        this.store.dispatch(new LoginAction(login));
    }

    // dispatcherSearchProduct(mc:string){
    //     this.store.dispatch(new SearchProductsAction(mc))
    // }
    // dispatcherDeleteProduct(product:Products){
    //     this.store.dispatch(new DeleteProductsAction(product))
    // }
    // dispatcherUpdateProduct(product:Products){
    //     this.store.dispatch(new UpdateProductsAction(product))
    // }
    // dispatcherAddProduct(product:Products){
    //     this.store.dispatch(new AddProductsAction(product))
    // }
}