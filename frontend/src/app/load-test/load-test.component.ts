import { Component, OnInit } from '@angular/core';
import {LoadTestService} from '../services/load-test.service'

@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.component.html',
  styleUrls: ['./load-test.component.css']
})
export class LoadTestComponent implements OnInit {

  constructor(private loadTestService:LoadTestService) { }
  private testNames=[];

  ngOnInit() {
    this.loadTestNames()
  }

  loadTestNames(){
    this.loadTestService.loadTest().subscribe((res:any[])=>{
      console.log(res);
      this.testNames=res;
      for(var i=0;i<this.testNames.length;i++){
        console.log(this.testNames[i].testName)
      }
    })
  }
}
