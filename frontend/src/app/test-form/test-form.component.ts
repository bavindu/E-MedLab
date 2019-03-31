import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateTestService } from '../services/create-test.service';
import { FormGroup, FormBuilder, FormArray, FormControl } from '@angular/forms';
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
  private patientsname:[];
  private searchResults=[];
  constructor(
    private route:ActivatedRoute,
    private createTestService:CreateTestService,
    private fb:FormBuilder,
    private testFromService:TestFormService) { }
    private pid;

  ngOnInit() {
    
    this.testForm=this.fb.group({
      testId:[],
      testName:[],
      patientId:[''],
      inputobservations:this.fb.array([
      ])
    });
    this.createTestForm();
    
  }
  createTestForm(){
    this.route.queryParams.subscribe(params=>{
      this.id=params.id;
      (<FormControl>this.testForm.get('testId')).setValue(this.id);
      this.createTestService.getTest(this.id).subscribe((res)=>{
        console.log('**************');
        console.log(res);
        this.testTemplate=res;
        (<FormControl>this.testForm.get('testName')).setValue(this.testTemplate.testName);
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
      console.log(this.observations[index].observationName)   
    }
  }

  addTestResults(){
    console.log('inside addTstResults')
    this.testFromService.addTestResults(this.testForm.value).subscribe();
  }


  search(event:any){
    console.log("key up!")
    console.log(JSON.stringify(event.target.value));
    this.testFromService.searchPatient({'input':event.target.value}).subscribe((data:any)=>{
      this.searchResults=[];
      console.log(data);
      for (let index = 0; index < data.length; index++) {
        let name=data[index].userName;
        let id=data[index]._id;
        this.searchResults.push([name,id]);
        console.log(this.searchResults)
        // this.searchResults.push(data[index].userName)
      }
    });

  }
  onPatientChange(value,id){
    console.log("on patient name change");
    console.log(id);
  }
}
