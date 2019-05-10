import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormArray, Validators} from '@angular/forms';
import { ObservationService } from 'src/app/services/observation.service';
import {ActivatedRoute, Router} from "@angular/router";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-create-observation',
  templateUrl: './create-observation.component.html',
  styleUrls: ['./create-observation.component.css']
})
export class CreateObservationComponent implements OnInit {
  private observationDetails;
  constructor(private fb:FormBuilder,private observationService:ObservationService,private router:Router,private ar:ActivatedRoute,public dialog: MatDialog) { }

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
      this.observationService.addObservations(this.observationDetails.value).subscribe((res:any)=>{
          console.log(res);
          if(res.code===11000){
            this.openDialog('h');
          }
          else{
            this.router.navigate(['../admin-profile'],{relativeTo:this.ar});
          }
        }
      );
      //
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
  openDialog(message): void {
    const dialogRef = this.dialog.open(ErrorDialog, {
      width: '300px',
      data:message
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.observationDetails.reset();

    });
  }



}
@Component({
  selector: 'error-dialog',
  templateUrl: 'error-dialog.html',
})
export class ErrorDialog {

  constructor(
    public dialogRef: MatDialogRef<ErrorDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onClick(): void {
    this.dialogRef.close();
  }

}
