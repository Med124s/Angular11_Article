import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ArticleComponent } from './components/article/article.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { AuthGuardGuard } from './guards/auth-guard.guard';
import { IsAdminGuardGuard } from './guardUsers/is-admin-guard.guard';
import { LoggedGuardGuard } from './guardUsers/logged-guard.guard';
import { ForbiddenComponent } from './notFound/forbidden/forbidden.component';

const routes: Routes = [
  {path:"",redirectTo:"/home",pathMatch:"full"},
  {path:"home",component:HomeComponent},
  {path:"auth/login",component:SignInComponent},
  // {path:"auth/signup",component:SignUpComponent},
  {path:"articles",component:ArticleComponent},
  {path:"**",component:ForbiddenComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[AuthGuardGuard]
})
export class AppRoutingModule { }
