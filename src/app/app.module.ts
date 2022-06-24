import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { JwtInterceptor } from './services/jwt.interceptor';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { EffectsService } from './effects/register.effect.service';
import { reducerLogin } from './reducer/register.reducer';
import { SignUpComponent } from './auth/signup/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';
import { ForbiddenComponent } from './notFound/forbidden/forbidden.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/dashboard/home/home.component';
import { NgxSoapModule } from 'ngx-soap';
import { ArticleComponent } from './components/article/article.component';
import { AddModelComponent } from './components/dialogsModel/add-model/add-model.component';
import { DialogModelComponent } from './components/dialogsModel/dialog-model/dialog-model.component';


@NgModule({
  declarations: [
    AppComponent,
    SignUpComponent,
    SignInComponent,
    HomeComponent,
    ForbiddenComponent,
    NavbarComponent,
    ArticleComponent,
    AddModelComponent,
    DialogModelComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    StoreModule.forRoot({loginState:reducerLogin}),
    EffectsModule.forRoot([EffectsService]),
    BrowserAnimationsModule,
    MaterialModule,
    ReactiveFormsModule,
    NgxSoapModule

  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
