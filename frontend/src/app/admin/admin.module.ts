import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminProfileComponent } from './components/admin-profile/admin-profile.component';
import { CreateObservationComponent } from './components/create-observation/create-observation.component';
import { PopupAddComponent } from './components/popup-add/popup-add.component';
import { AdminEditProfileComponent } from './components/admin-edit-profile/admin-edit-profile.component';
import { EditTestComponent } from './components/edit-test/edit-test.component';
import { EditObservationComponent } from './components/edit-observation/edit-observation.component';
import { AdminToolbarComponent } from './components/admin-toolbar/admin-toolbar.component';

@NgModule({
  declarations: [AdminProfileComponent, CreateObservationComponent, PopupAddComponent, AdminEditProfileComponent, EditTestComponent, EditObservationComponent, AdminToolbarComponent],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
