import {Component, Inject, OnInit} from '@angular/core';
import {FormGroup, FormControl, FormArray, FormBuilder, Validators} from '@angular/forms';
import {MetaTestService} from '../../../services/meta-test.service';
import {ActivatedRoute, Router} from '@angular/router';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';
import { EventEmitterService } from 'src/app/services/event-emitter.service';
import { observable } from 'rxjs';
import {hasRequiredField} from "../../../helpers/check-validator";
import {ObservationService} from "../../../services/observation.service";

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  private createTest:FormGroup;
  private observationList= [];
  private selectedOptions=[];

  constructor(
    private fb:FormBuilder,
    private metaTestService:MetaTestService,
    private router:Router,
    private dialog:MatDialog,
    private eventEmitterService:EventEmitterService,
    private ar:ActivatedRoute,
    private observationService:ObservationService
    ) { }

  ngOnInit() {
    this.createTest=this.fb.group({
      testName:['',Validators.required],
      observations:this.fb.array([
        this.createNewObservation()
      ])
    });
    // if (this.eventEmitterService.subsVar==undefined) {
    //   this.eventEmitterService.subsVar = this.eventEmitterService.
    //   invokeCreateTestComponentFunction.subscribe((selectedOptions) => {
    //     this.addExistingObs(selectedOptions);
    //   });
    // }
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
    console.log(obsid);
    if(obsid!==undefined){
      obsid.forEach(element => {
        console.log("element "+element);
        (<FormArray>this.createTest.get('observations')).push(this.createExistingObservation(element));
        console.log(this.createTest.value)
      });
    }
    
  }

  addNewMetaTest(){
    if(this.createTest.invalid || (<FormArray>this.createTest.get('observations')).length===0){
      alert("Please Fill the form");
      return
    }
    else{
      console.log("observation length "+(<FormArray>this.createTest.get('observations')).length);
      this.metaTestService.addTestTemplate(this.createTest.value).subscribe((res:any)=>{
        console.log("test save "+JSON.stringify(res));
        if(res.code===11000){
          alert("Name of the test is allready exist!")
        }
        else if (res.code===11001){
          alert(res.dupObsName+" is allready exist");
        }
        else{
          console.log("Test Added");
          this.router.navigate(["../admin-profile"],{relativeTo:this.ar});
        }
      });
      console.log('on addnewTest');
      console.log(this.createTest.value);

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
    // this.dialog.open(PopupAddComponent);
    this.openDialog();

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
            if(this.getunit(i)!==null && this.getreferenceRange(i)!== null){
              this.getunit(i).clearValidators();
              this.getreferenceRange(i).clearValidators();
              this.getunit(i).updateValueAndValidity({onlySelf : true});
              this.getreferenceRange(i).updateValueAndValidity({onlySelf : true});
            }
          }
        }
      }
    )
  }

  loadObservationList(){
    this.observationList.length=0;
    this.observationService.getObservationList().subscribe((data:any)=>{
      data.forEach(element => {
        this.observationList.push(element);
      });
    });
    console.log(this.observationList)


  }


  openDialog(): void {
    this.loadObservationList();
    this.selectedOptions.length=0;
    const dialogRef = this.dialog.open(AddObservationDialog, {
      data: {observationList: this.observationList, selectedOptions: this.selectedOptions}

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.addExistingObs(result);
    });
  }

}

@Component({
  selector: 'popup-add.component',
  templateUrl: 'popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class AddObservationDialog {

  private searchText:string;

  constructor(
    public dialogRef: MatDialogRef<AddObservationDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
