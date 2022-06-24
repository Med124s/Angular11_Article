import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { childRoute } from '../../childe.routes';
import { RegistrationComponent } from '../registration/registration.component';

const routes: Routes = [
  {path:'',component:RegistrationComponent,children:[...childRoute]}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RouteRoutingModule { }
