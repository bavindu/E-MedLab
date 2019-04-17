import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormArray, Validators} from '@angular/forms';
import { ObservationService } from 'src/app/services/observation.service';

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.css']
})
export class CreateObservationComponent implements OnInit {
  private observationDetails;
  constructor(private fb:FormBuilder,private observationService:ObservationService) { }

  ngOnInit() {
    this.observationDetails=this.fb.group({
      observationName:['',Validators.required],
      dataType:[],
      unit:[''],
      referenceRange:[''],
      codedValues:this.fb.array([])
    });
    this.dataTypeValueChanges();
  }

  addCodedValues(i){
    (<FormArray>(this.observationDetails.get('codedValues')).push(this.createNewCodeValue()));
  }

  createNewCodeValue(){
    return this.fb.group({
      codedValue:['',Validators.required]
    })
  }
  deleteCodeValue(j){
    (<FormArray>this.observationDetails.get('codedValues')).removeAt(j);
  }
  addObservation(){
    console.log("add observation");
    if(this.observationDetails.invalid){
      alert('Please insert correct information');
      return
    }
    else{
      this.observationService.addObservations(this.observationDetails.value).subscribe();
    }

  }

  get observationName(){return this.observationDetails.get('observationName')}
  get dataType(){return this.observationDetails.get('dataType')}

  dataTypeValueChanges(){
    this.observationDetails.get('dataType').valueChanges.subscribe(
      typeofdata=>{
        if(typeofdata==='numaric'){
          this.observationDetails.get('unit').setValidators([Validators.required]);
          this.observationDetails.get('referenceRange').setValidators([Validators.required]);
          while ((<FormArray>this.observationDetails.get('codedValues')).length!==0){
            (<FormArray>this.observationDetails.get('codedValues')).removeAt(0);
          }
        }
        else{
          this.observationDetails.get('unit').clearValidators();
          this.observationDetails.get('referenceRange').clearValidators();
        }
        this.observationDetails.get('unit').updateValueAndValidity();
        this.observationDetails.get('referenceRange').updateValueAndValidity();
      }
    )
  }



}
