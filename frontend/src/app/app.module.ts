import { BrowserModule, HammerGestureConfig } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MaterialModule} from './material/material.module'
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import {FlexLayoutModule} from '@angular/flex-layout';

import {MetaTestService} from './services/meta-test.service';
import {LoadTestService} from './services/load-test.service';
import {LoginService} from './services/login.service';
import {AuthGuard} from './auth/auth.guard';
import {AuthInterceptor} from './auth/auth.interceptor';
import {AppLoginService} from './services/app-login.service'
import {FilterPipe} from './admin/components/popup-add/popup-filter.pipe';
import {EventEmitterService} from './services/event-emitter.service';
import {CreateTestService} from './services/create-test.service';


import { TestFormComponent } from './test-form/test-form.component';
import { LoadTestComponent } from './load-test/load-test.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {AdminProfileComponent} from './admin/components/admin-profile/admin-profile.component';
import { PatientProfileComponent } from './patient/components/patient-profile/patient-profile.component';
import {CreateObservationComponent} from './admin/components/create-observation/create-observation.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { EditProfileComponent } from './patient/components/edit-profile/edit-profile.component';
import { ViewTestComponent } from './patient/components/view-test/view-test.component';
import { ViewPatientTestlistComponent } from './patient/components/view-patient-testlist/view-patient-testlist.component';
import {PopupAddComponent} from './admin/components/popup-add/popup-add.component'

@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent,
    TestFormComponent,
    LoadTestComponent,
    LoginComponent,
    RegisterComponent,
    AdminProfileComponent,
    PatientProfileComponent,
    EditProfileComponent,
    CreateObservationComponent,
    ViewTestComponent,
    ViewPatientTestlistComponent,
    PopupAddComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    FormsModule
   
  ],
  providers: [EventEmitterService,LoginService,CreateTestService,MetaTestService,LoadTestService,LoginService,AuthGuard,AppLoginService,AuthInterceptor,{
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
  }],
  entryComponents:[PopupAddComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
