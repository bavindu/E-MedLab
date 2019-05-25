import { Component, OnInit } from '@angular/core';
import {TestFormService} from "../services/test-form.service";
import {ActivatedRoute} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MatTableDataSource} from "@angular/material";



@Component({
  selector: 'app-view-patient-test',
  templateUrl: './view-patient-test.component.html',
  styleUrls: ['./view-patient-test.component.css'],
  providers: [DatePipe]
})
export class ViewPatientTestComponent implements OnInit {


  private observations=[];
  private id;
  private displayedColums: string[] = ['tests', 'value', 'unit', 'referenceRange'];
  private testValueData = [];
  private testResults;
  private testName;
  private datasource;
  private userName;

  constructor(
    private testFormServise: TestFormService,
    private route: ActivatedRoute,
    ) { }

  ngOnInit() {
    this.datasource = new MatTableDataSource();
    this.createTestForm();

  }

  createTestForm(){
    this.route.queryParams.subscribe(params=>{
      this.id=params.id;
      this.userName=params.patientName;
      this.testFormServise.getTestResults(this.id).subscribe((data:any)=>{
        this.testResults = data;
        console.log(this.testResults);
        this.testName = data.testName;
        console.log('this is data  ' + data.testName);
        data.observations.forEach(element => {
          let tunit;
          let trrange;
          if (element.observationId.unit === undefined) {
            tunit = 'NA';
            trrange = 'NA';
          } else {
            tunit = element.observationId.unit;
            trrange = element.observationId.referenceRange;
          }
          const jobj = {test: element.observationId.observationName, observation: element.observationValue, unit: tunit, referenceRange: trrange};
          this.testValueData.push(jobj);

        });
        console.log(this.testValueData);
        this.datasource.data = this.testValueData;
      })
    });

  }
  delete(){
    this.testFormServise.deleterTestRecord(this.id).subscribe((res:any)=>{
      console.log('res '+res);

    });
  }



}
