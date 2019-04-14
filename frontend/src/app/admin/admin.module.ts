import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CreateObservationComponent } from './components/create-observation/create-observation.component';
import { PopupAddComponent } from './components/popup-add/popup-add.component';
import { AdminEditProfileComponent } from './components/admin-edit-profile/admin-edit-profile.component';

@NgModule({
  declarations: [AdminProfileComponent, CreateObservationComponent, PopupAddComponent, AdminEditProfileComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
