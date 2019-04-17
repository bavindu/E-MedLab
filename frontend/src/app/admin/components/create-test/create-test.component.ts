import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import {MetaTestService} from '../../../services/meta-test.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { PopupAddComponent } from '../popup-add/popup-add.component';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { observable } from 'rxjs';
import {hasRequiredField} from "../../../helpers/check-validator";

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
      testName:['',Validators.required],
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
    this.dataTypeValueChanges();
  }

  createNewObservation(){
      return this.fb.group({
        observationName:['',Validators.required],
        dataType:[],
        unit:[''],
        referenceRange:[''],
        codedValues:this.fb.array([])
      });
  }
  createNewCodeValue(){
    return this.fb.group({
      codedValue:['',Validators.required]
    })
  }
  createExistingObservation(element){
    console.log("pushed");
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
    if(this.createTest.invalid){
      alert("Please Fill the form");
      return
    }else{
      console.log(this.createTest.value);
      this.metaTestService.addTestTemplate(this.createTest.value).subscribe();
      console.log('on addnewTest');
      console.log(this.createTest.value);
      this.router.navigateByUrl('/admin-profile');
    }
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
  get testName(){return this.createTest.get('testName');}

  getobservationName(i){return (<FormArray>this.createTest.get('observations')).at(i).get('observationName');}

  getunit(i){return (<FormArray>this.createTest.get('observations')).at(i).get('unit');}

  getreferenceRange(i){return (<FormArray>this.createTest.get('observations')).at(i).get('referenceRange');}

  getcodedValueArray(i){return (<FormArray>this.createTest.get('observations')).at(i).get('codedValues')}

  getcodedValue(i,j){return (<FormArray>(<FormArray>this.createTest.get('observations')).at(i).get('codedValues')).at(j);}

  dataTypeValueChanges(){
    (<FormArray>this.createTest.get('observations')).valueChanges.subscribe(
      typeofdata=>{

        console.log("array value change "+JSON.stringify(typeofdata));
        console.log(typeofdata.length);
        for (let i = 0; i < typeofdata.length; i++) {
          if(typeofdata[i].dataType==="numaric"){
            console.log('numaric')
            this.getunit(i).setValidators([Validators.required]);
            this.getreferenceRange(i).setValidators([Validators.required]);
            while ((<FormArray>this.getcodedValueArray(i)).length!==0){
              (<FormArray>this.getcodedValueArray(i)).removeAt(0);
            }



          }
          else{
            console.log('coded');
            this.getunit(i).clearValidators();
            this.getreferenceRange(i).clearValidators();
            console.log("coded value length "+typeofdata[i].codedValues.length);


          }
          this.getunit(i).updateValueAndValidity({onlySelf : true});
          this.getreferenceRange(i).updateValueAndValidity({onlySelf : true});
        }

      }
    )
  }

}
