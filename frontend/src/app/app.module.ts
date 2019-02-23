import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTestComponent } from './components/create-test/create-test.component';
import {MaterialModule} from './material/material.module'
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MetaTestService} from './services/meta-test.service';

@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
   
  ],
  providers: [MetaTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
