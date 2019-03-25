import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormArray } from '@angular/forms';
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
      observationName:[''],
      dataType:[],
      unit:[''],
      referenceRange:[''],
      codedValues:this.fb.array([])
    });
    
  }

  addCodedValues(i){
    (<FormArray>(this.observationDetails.get('codedValues')).push(this.createNewCodeValue()));
  }

  createNewCodeValue(){
    return this.fb.group({
      codedValue:['']
    })
  }
  deleteCodeValue(j){
    (<FormArray>this.observationDetails.get('codedValues')).removeAt(j);
  }
  addObservation(){
    console.log("add observation")
    this.observationService.addObservations(this.observationDetails.value).subscribe();
  }



}
