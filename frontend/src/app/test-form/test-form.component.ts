import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { CreateTestService } from '../services/create-test.service';
import {FormGroup, FormBuilder, FormArray, FormControl, Validators} from '@angular/forms';
import { TestFormService } from '../services/test-form.service';
import {LoginService} from "../services/login.service";

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  private id;
  private testTemplate;
  private testForm:FormGroup;
  private observations=[];
  private patientsname:[];
  private searchResults=[];
  private userType;
  constructor(
    private route:ActivatedRoute,
    private createTestService:CreateTestService,
    private fb:FormBuilder,
    private router:Router,
    private testFromService:TestFormService,
    private ar:ActivatedRoute,
    private loginService:LoginService) { }


  ngOnInit() {
    
    this.testForm=this.fb.group({
      testId:[],
      testName:[],
      patientId:['',Validators.required],
      date:['',Validators.required],
      comments:[''],
      inputobservations:this.fb.array([
      ])
    });
    this.createTestForm();
    this.getUserType();
    
  }

  getUserType(){
    this.loginService.getUserProfile().subscribe((res:any)=>{
      console.log("inside get user Type "+JSON.stringify(res));
      this.userType=res.user.userType
    });
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
      observationValue:['',Validators.required],
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
    if(this.testForm.invalid){
      alert("Please enter correct values");
      return
    }
    // else if(this.searchResults.length===0){
    //   alert("Incorrect user");
    // }
    else{
      console.log('inside addTstResults')
      this.testFromService.addTestResults(this.testForm.value).subscribe((res:any)=>{
        console.log("response "+JSON.stringify(res));
        if(res.code===11005){
          alert("incorect user id")
        }
        else if(res.code===11000){
          if(this.userType==='admin'){
            this.router.navigate(['../admin-profile'],{relativeTo:this.ar});
          }
          else if(this.userType==="labEmployee"){
            this.router.navigate(['../lab-empolyee-profile'],{relativeTo:this.ar});
          }
          else{
            console.log("user type "+this.userType)
          }
        }
        else {
          alert("Error!")
        }
      });

    }
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


  get patientId(){return this.testForm.get('patientId')}
  get date(){return this.testForm.get('date')}
  getObservationName(i){ return (<FormArray>this.testForm.get('inputobservations')).at(i).get('observationValue')}
}
