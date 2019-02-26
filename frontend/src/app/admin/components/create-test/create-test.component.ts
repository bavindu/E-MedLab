import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,FormArray,FormBuilder} from '@angular/forms';
import {MetaTestService} from '../../../services/meta-test.service';

@Component({
  selector: 'app-create-test',
  templateUrl: './create-test.component.html',
  styleUrls: ['./create-test.component.css']
})
export class CreateTestComponent implements OnInit {

  createTest:FormGroup;

  constructor(private fb:FormBuilder,private metaTestService:MetaTestService) { }

  ngOnInit() {
    this.createTest=this.fb.group({
      testName:[''],
      observations:this.fb.array([
        this.createNewObservation()
      ])
    });
  }

  createNewObservation(){
      return this.fb.group({
        observationName:[''],
        unit:[''],
        referenceRange:['']
      });
  }

  addNewObsClick(){
    (<FormArray>this.createTest.get('observations')).push(this.createNewObservation());
    console.log(this.createTest.value);
  }

  addNewMetaTest(){
    this.metaTestService.addTestTemplate(this.createTest.value).subscribe();
    console.log('on addnewTest');
    console.log(this.createTest.value);
  }
}
