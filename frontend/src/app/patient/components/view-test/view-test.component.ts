import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestFormService } from '../../../services/test-form.service';
import { MatTableDataSource } from '@angular/material';
import { User } from 'src/app/models/user.model';
import { DatePipe } from '@angular/common';
import * as jsPDF from 'jspdf';
import {UserService} from "../../../services/user.service";
import {CreatePdfService} from "../../../services/create-pdf.service";

export interface TestForm {
  observationName: string ;
  observationValue: string;
  unit: string;
  referenceRange: string;
}

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css'],
  providers: [DatePipe]
})



export class ViewTestComponent implements OnInit {

  private testId;
  private testName;
  private date: Date;
  private user;
  private testResults;
  private userAge;
  private displayedColums: string[] = ['tests', 'value', 'unit', 'referenceRange'];
  private testValueData = [];
  private datasource;

  constructor(
    private route: ActivatedRoute,
    private testFormServise: TestFormService,
    private userService: UserService,
    private createPDFservice:CreatePdfService
    ) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe((user:any) => {
      this.user = user.user;
      console.log('user '+JSON.stringify(user))
    });
    this.datasource = new MatTableDataSource();
    this.oninitfunction();


  }


  oninitfunction() {
    this.createTestResults();

  }


  async createTestResults() {
    this.route.queryParams.subscribe(params => {
      this.testId = params.id;
      console.log(params.id);
    });
    await this.testFormServise.getTestResults(this.testId).subscribe((data: any) => {
      this.testResults = data;
      console.log(this.testResults);
      this.testName = data.testName;
      this.date = new Date(data.date);
      console.log('this is date ' + this.date);
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

      console.log("birth day "+this.user.birthDay);
      console.log("Date now "+Date.now());
      var timeDiff = Math.abs(Date.now() - Date.parse(this.user.birthDay));
      console.log("age "+Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25));
      this.userAge=Math.floor(timeDiff / (1000 * 3600 * 24) / 365.25);
      this.datasource.data = this.testValueData;
    });
  }

  download() {
    const doc = new jsPDF('p', 'mm', 'a4');
    this.createPDFservice.createPDF(this.testResults,this.user,doc);
    doc.save('testreport.pdf');
  }



}
