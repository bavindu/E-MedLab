import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadTestComponent } from './load-test/load-test.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {TestFormComponent} from './test-form/test-form.component'
import {LoginComponent} from './login/login.component'
import { RegisterComponent } from './register/register.component';
import {AdminProfileComponent} from './admin/components/admin-profile/admin-profile.component';
import {PatientProfileComponent} from './patient/patient-profile/patient-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { CreateObservationComponent } from './admin/components/create-observation/create-observation.component';

const routes: Routes = [
  {path:"test-form", component:TestFormComponent},
  {path:"login", component:LoginComponent},
  {path:"register", component:RegisterComponent,canActivate:[AuthGuard]},
  {path:"create-test", component:CreateTestComponent,canActivate:[AuthGuard]},
  {path:"admin-profile",component:AdminProfileComponent,canActivate:[AuthGuard],children:[]},
  {path:"load-test", component:LoadTestComponent},
  {path:"create-observation",component:CreateObservationComponent,canActivate:[AuthGuard]},
  {path:"patient-profile",component:PatientProfileComponent,canActivate:[AuthGuard]},
  {path:'',redirectTo:'/login',pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
