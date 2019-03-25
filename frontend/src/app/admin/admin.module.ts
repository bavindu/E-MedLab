import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CreateObservationComponent } from './components/create-observation/create-observation.component';

@NgModule({
  declarations: [AdminProfileComponent, CreateObservationComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
