import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder} from '@angular/forms';
import {MetaTestService} from '../../../services/meta-test.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopupAddComponent } from '../popup-add/popup-add.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { observable } from 'rxjs';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  private createTest:FormGroup;

  constructor(
    private fb:FormBuilder,
    private metaTestService:MetaTestService,
    private router:Router,
    private dialog:MatDialog,
    private eventEmitterService:EventEmitterService
    ) { }

  ngOnInit() {
    this.createTest=this.fb.group({
      testName:[''],
      date:[''],
      observations:this.fb.array([
        this.createNewObservation()
      ])
    });
    if (this.eventEmitterService.subsVar==undefined) {    
      this.eventEmitterService.subsVar = this.eventEmitterService.    
      invokeCreateTestComponentFunction.subscribe((selectedOptions) => {    
        this.addExistingObs(selectedOptions);    
      });    
    } 
  }

  createNewObservation(){
      return this.fb.group({
        observationName:[''],
        dataType:[],
        unit:[''],
        referenceRange:[''],
        codedValues:this.fb.array([])
      });
  }
  createNewCodeValue(){
    return this.fb.group({
      codedValue:['']
    })
  }
  createExistingObservation(element){
    console.log("pushed")
    return this.fb.group({
      existingObservation:[element]   
    })
  }

  addNewObsClick(){
    (<FormArray>this.createTest.get('observations')).push(this.createNewObservation());
    console.log(this.createTest.value);
  }
  addExistingObs(obsid:any){
    console.log('addExistingObs');
    console.log(obsid)
    obsid.forEach(element => {
      console.log("element "+element);
      (<FormArray>this.createTest.get('observations')).push(this.createExistingObservation(element));
      console.log(this.createTest.value)
    });
    
  }

  addNewMetaTest(){
    console.log(this.createTest.value);
    this.metaTestService.addTestTemplate(this.createTest.value).subscribe();
    console.log('on addnewTest');
    console.log(this.createTest.value);
    this.router.navigateByUrl('/admin-profile');
  }
  removeField(i){
    (<FormArray>this.createTest.get('observations')).removeAt(i);
  }

  addCodedValues(i){
    (<FormArray>((<FormArray>this.createTest.get('observations')).at(i)).get('codedValues')).push(this.createNewCodeValue());
  }

  deleteCodeValue(i,j){
    (<FormArray>((<FormArray>this.createTest.get('observations')).at(i)).get('codedValues')).removeAt(j);
  }

  addExistingObsClick(){
    this.dialog.open(PopupAddComponent);

  }

}
