import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module'
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';

import {MetaTestService} from './services/meta-test.service';
import {LoadTestService} from './services/load-test.service';
import {LoginService} from './services/login.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import {AppLoginService} from './services/app-login.service'

import { TestFormComponent } from './test-form/test-form.component';
import { LoadTestComponent } from './load-test/load-test.component';
import { AddTestResultsComponent } from './add-test-results/add-test-results.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {AdminProfileComponent} from './admin/components/admin-profile/admin-profile.component';
import { PatientProfileComponent } from './patient/patient-profile/patient-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent,
    TestFormComponent,
    LoadTestComponent,
    AddTestResultsComponent,
    LoginComponent,
    RegisterComponent,
    AdminProfileComponent,
    PatientProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
   
  ],
  providers: [MetaTestService,LoadTestService,LoginService,AuthGuard,AppLoginService,AuthInterceptor,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
