import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadTestComponent } from './load-test/load-test.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {TestFormComponent} from './test-form/test-form.component'
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './admin/components/register/register.component';
import {AdminProfileComponent} from './admin/components/admin-profile/admin-profile.component';
import {PatientProfileComponent} from './patient/components/patient-profile/patient-profile.component';
import { AuthGuard } from './auth/auth.guard';
import {AuthAdminGuard} from './auth/auth-admin.guard';
import { CreateObservationComponent } from './admin/components/create-observation/create-observation.component';
import {EditProfileComponent} from './patient/components/edit-profile/edit-profile.component';
import {ViewPatientTestlistComponent} from './patient/components/view-patient-testlist/view-patient-testlist.component';
import {LabEmployeeProfileComponent} from './lab-employee/components/lab-employee-profile/lab-employee-profile.component'
import {ViewTestComponent} from './patient/components/view-test/view-test.component';
import {LabEmployeeEditProfileComponent} from './lab-employee/components/lab-employee-edit-profile/lab-employee-edit-profile.component'
import {AdminEditProfileComponent} from './admin/components/admin-edit-profile/admin-edit-profile.component';
import {EditTestComponent} from './admin/components/edit-test/edit-test.component';
import {EditObservationComponent} from './admin/components/edit-observation/edit-observation.component';

const routes: Routes = [
  {path:"test-form", component:TestFormComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent,canActivate:[AuthAdminGuard]},
  {path:"create-test", component:CreateTestComponent,canActivate:[AuthAdminGuard]},
  {path:"admin-profile",component:AdminProfileComponent,canActivate:[AuthAdminGuard]},
  {path:"admin-edit-profile",component:AdminEditProfileComponent,canActivate:[AuthAdminGuard]},
  {path:"edit-test",component:EditTestComponent,canActivate:[AuthAdminGuard]},
  {path:"edit-observation",component:EditObservationComponent,canActivate:[AuthAdminGuard]},
  {path:"lab-empolyee-profile",component:LabEmployeeProfileComponent,canActivate:[AuthGuard],children:[]},
  {path:"lab-empolyee-edit-profile",component:LabEmployeeEditProfileComponent,canActivate:[AuthGuard],children:[]},
  {path:"load-test", component:LoadTestComponent},
  {path:"create-observation",component:CreateObservationComponent,canActivate:[AuthAdminGuard]},
  {path:"patient-profile",component:PatientProfileComponent,canActivate:[AuthGuard]},
  {path:"view-testList",component:ViewPatientTestlistComponent,canActivate:[AuthGuard]},
  {path:"view-myTest",component:ViewTestComponent,canActivate:[AuthGuard]},
  {path:"edit-profile",component:EditProfileComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
