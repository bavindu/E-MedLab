import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestFormService } from '../../../services/test-form.service';
import { MatTableDataSource } from '@angular/material';
import { UserDataService } from '../../services/user-data.service';
import { User } from 'src/app/models/user.model';

export interface TestForm {
  observationName: string ;
  observationValue: string;
  unit: string;
  referenceRange: string;
}

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})



export class ViewTestComponent implements OnInit {

  private testId;
  private testName;
  private date:Date;
  private user=new User();
  private testResults;
  private displayedColums:string[]=['tests','value','unit','referenceRange'];
  private testValueData=[]
  private datasource;

  constructor(private route:ActivatedRoute,private testFormServise:TestFormService,private data:UserDataService) { }

  ngOnInit() {
    this.data.currentData.subscribe(user=>this.user=user)
    this.datasource=new MatTableDataSource()
    this.oninitfunction();

    
  }


  async oninitfunction(){
    await this.createTestResults();

  }
  

  createTestResults(){
    this.route.queryParams.subscribe(params=>{
      this.testId=params.id
      console.log(params.id)
    })
    this.testFormServise.getTestResults(this.testId).subscribe((data:any)=>{
      this.testResults=data;
      this.testName=data.testName;
      this.date=new Date(data.date);
      console.log("this is date "+this.date)
      console.log('this is data  '+data.testName);
      data.observations.forEach(element => {
        let tunit;
        let trrange;
        if(element.observationId.unit===undefined){
          tunit="NA";
          trrange="NA";
        }else{
          tunit=element.observationId.unit;
          trrange=element.observationId.referenceRange;
        }
        const jobj={test:element.observationId.observationName,observation:element.observationValue,unit:tunit,referenceRange:trrange}
        this.testValueData.push(jobj);
        console.log(this.testValueData)
      });
      this.datasource.data=this.testValueData;
    });
  }

  

}
