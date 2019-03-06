import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateTestService } from '../services/create-test.service';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { TestFormService } from '../services/test-form.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  private id;
  private testTemplate;
  private testForm:FormGroup;
  private testName;
  private observations=[];
  constructor(
    private route:ActivatedRoute,
    private createTestService:CreateTestService,
    private fb:FormBuilder,
    private testFromService:TestFormService) { }

  ngOnInit() {
    
    this.testForm=this.fb.group({
      patientID:[''],
      inputobservations:this.fb.array([
      ])
    });
    this.createTestForm();
    
  }
  createTestForm(){
    this.route.queryParams.subscribe(params=>{
      this.id=params.id;
      this.createTestService.getTest(this.id).subscribe((res)=>{
        this.testTemplate=res;
        this.testName=this.testTemplate.testName;
        this.observations=this.testTemplate.observations
        console.log("in create Test form Observations length"+this.observations.length);
        this.addInputFields();
      });
  
    });
  }

  createFormGroup(id){
    return this.fb.group({
      observationValue:[''],
      observationId:[id]
    })
  }

  addInputFields(){
    
    console.log("in add input field Observations length"+this.observations.length);
    
    for (let index = 0; index < this.observations.length; index++) {
      (<FormArray>this.testForm.get('inputobservations')).push(this.createFormGroup(this.observations[index]._id));
      console.log(this.observations[index]._id)   
    }
  }

  addTestResults(){
    console.log('inside addTstResults')
    this.testFromService.addTestResults(this.testForm.value).subscribe();
  }
}
