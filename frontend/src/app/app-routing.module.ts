import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoadTestComponent } from './load-test/load-test.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {TestFormComponent} from './test-form/test-form.component'

const routes: Routes = [
  {path:"load-test", component:LoadTestComponent},
  {path:"create-test", component:CreateTestComponent},
  {path:"test-form", component:TestFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
