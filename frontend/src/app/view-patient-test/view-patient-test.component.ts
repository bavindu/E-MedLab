import { Component, OnInit } from '@angular/core';
import {TestFormService} from "../services/test-form.service";
import {ActivatedRoute, Router} from "@angular/router";
import {DatePipe} from "@angular/common";
import {MatTableDataSource} from "@angular/material";
import {UserService} from "../services/user.service";



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
  private userType;

  constructor(
    private testFormServise: TestFormService,
    private route: ActivatedRoute,
    private router:Router,
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
        console.log('%%%% test data '+JSON.stringify(data));
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
    console.log('#########delete');
    this.testFormServise.deleterTestRecord(this.id).subscribe((res:any)=>{
      this.router.navigate(['../admin-profile'],{relativeTo:this.route});
      console.log('res '+JSON.stringify(res));

    });
  }



}
