import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTestComponent } from './admin/components/create-test/create-test.component';
import {MaterialModule} from './material/material.module'
import {ReactiveFormsModule} from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import {MetaTestService} from './services/meta-test.service';
import {LoadTestService} from './services/load-test.service';
import { TestFormComponent } from './test-form/test-form.component';
import { LoadTestComponent } from './load-test/load-test.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateTestComponent,
    TestFormComponent,
    LoadTestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule
   
  ],
  providers: [MetaTestService,LoadTestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
