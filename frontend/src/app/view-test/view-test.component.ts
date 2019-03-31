import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TestFormService } from '../services/test-form.service';
import { MatTableDataSource } from '@angular/material';

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
  private testResults;
  private displayedColums:string[]=['tests','value','unit','referenceRange'];
  private testValueData=[]
  private datasource;

  constructor(private route:ActivatedRoute,private testFormServise:TestFormService) { }

  ngOnInit() {
    this.datasource=new MatTableDataSource()
    this.oninitfunction();
    
  }


  async oninitfunction(){
    await this.createTestResults();

  }
  addTestValueToArray(){
    console.log("Observations");
    // this.testResults.observations.forEach(element => {
    //   const jobj={test:element.observationName,observation:element.observationValue,unit:element.unit,ReferenceRange:element.referenceRange}
    //   console.log(jobj);
    //   // this.testValueData.push(jobj)
    // });
  }

  createTestResults(){
    this.route.queryParams.subscribe(params=>{
      this.testId=params.id
      console.log(params.id)
    })
    this.testFormServise.getTestResults(this.testId).subscribe((data:any)=>{
      this.testResults=data;
      console.log('this is data  '+data.observations);
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
