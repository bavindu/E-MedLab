import { TestBed } from '@angular/core/testing';

import { UserService } from './user.service';
import {BrowserModule} from "@angular/platform-browser";
import {AppRoutingModule} from "../app-routing.module";
import {MaterialModule} from "../material/material.module";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {LayoutModule} from "@angular/cdk/layout";
import {MatButtonModule, MatIconModule, MatListModule, MatSidenavModule, MatToolbarModule} from "@angular/material";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AppComponent} from "../app.component";
import {AddObservationDialog, CreateTestComponent} from "../admin/components/create-test/create-test.component";
import {TestFormComponent} from "../test-form/test-form.component";
import {LoadTestComponent} from "../load-test/load-test.component";
import {LoginComponent, PopupError} from "../login/login.component";
import {RegisterComponent} from "../admin/components/register/register.component";
import {AdminProfileComponent} from "../admin/components/admin-profile/admin-profile.component";
import {PatientProfileComponent} from "../patient/components/patient-profile/patient-profile.component";
import {EditProfileComponent} from "../patient/components/edit-profile/edit-profile.component";
import {
  CreateObservationComponent,
  ErrorDialog
} from "../admin/components/create-observation/create-observation.component";
import {ViewTestComponent} from "../patient/components/view-test/view-test.component";
import {ViewPatientTestlistComponent} from "../patient/components/view-patient-testlist/view-patient-testlist.component";
import {FilterPipe} from "../admin/components/create-test/popup-filter.pipe";
import {LabEmployeeProfileComponent} from "../lab-employee/components/lab-employee-profile/lab-employee-profile.component";
import {LabEmployeeEditProfileComponent} from "../lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component";
import {AdminEditProfileComponent} from "../admin/components/admin-edit-profile/admin-edit-profile.component";
import {DeleteConfirmationDialog, EditTestComponent} from "../admin/components/edit-test/edit-test.component";
import {
  DeleteObservationConfirmationDialog,
  EditObservationComponent
} from "../admin/components/edit-observation/edit-observation.component";
import {AdminToolbarComponent} from "../admin/components/admin-toolbar/admin-toolbar.component";
import {LabEmployeeToolbarComponent} from "../lab-employee/components/lab-employee-toolbar/lab-employee-toolbar.component";
import {PatientToolbarComponent} from "../patient/components/patient-toolbar/patient-toolbar.component";
import {DownloadMultiplePdfComponent} from "../patient/components/download-multiple-pdf/download-multiple-pdf.component";
import {DatePipe} from "@angular/common";
import {EventEmitterService} from "./event-emitter.service";
import {LoginService} from "./login.service";
import {CreateTestService} from "./create-test.service";
import {MetaTestService} from "./meta-test.service";
import {LoadTestService} from "./load-test.service";
import {AuthGuard} from "../auth/auth.guard";
import {AppLoginService} from "./app-login.service";
import {AuthInterceptor} from "../auth/auth.interceptor";
import {ViewAddedTestResultsListComponent} from "../view-added-test-results-list/view-added-test-results-list.component";
import {ViewPatientTestComponent} from "../view-patient-test/view-patient-test.component";
import {ViewPatientsComponent} from "../admin/components/view-patients/view-patients.component";
import {ViewPatientinfoComponent} from "../admin/components/view-patientinfo/view-patientinfo.component";

describe('UserService', () => {
  beforeEach(() => TestBed.configureTestingModule({
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
      FilterPipe,
      LabEmployeeProfileComponent,
      LabEmployeeEditProfileComponent,
      AdminEditProfileComponent,
      PopupError,
      EditTestComponent,
      DeleteConfirmationDialog,
      EditObservationComponent,
      DeleteObservationConfirmationDialog,
      AdminToolbarComponent,
      LabEmployeeToolbarComponent,
      PatientToolbarComponent,
      ErrorDialog,
      AddObservationDialog,
      DownloadMultiplePdfComponent,
      ViewAddedTestResultsListComponent,
      ViewPatientTestComponent,
      ViewPatientsComponent,
      ViewPatientinfoComponent
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
    providers: [DatePipe,EventEmitterService,LoginService,CreateTestService,MetaTestService,LoadTestService,LoginService,AuthGuard,AppLoginService,AuthInterceptor,{
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }],
  }));

  it('should be created', () => {
    const service: UserService = TestBed.get(UserService);
    expect(service).toBeTruthy();
  });
});
