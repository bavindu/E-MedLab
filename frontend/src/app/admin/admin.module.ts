import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CreateObservationComponent } from './components/create-observation/create-observation.component';
import { PopupAddComponent } from './components/popup-add/popup-add.component';

@NgModule({
  declarations: [AdminProfileComponent, CreateObservationComponent, PopupAddComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
