import { Component, OnInit } from '@angular/core';
import {LoadTestService} from '../services/load-test.service'
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from "../services/login.service";


@Component({
  selector: 'app-load-test',
  templateUrl: './load-test.component.html',
  styleUrls: ['./load-test.component.css']
})
export class LoadTestComponent implements OnInit {

  constructor(private loadTestService:LoadTestService,
              private router:Router,
              private ar:ActivatedRoute,
              ) { }
  private test=[];
  private testNames=[];


  ngOnInit() {
    this.loadTestNames()
  }



  loadTestNames(){
    this.loadTestService.loadTest().subscribe((res:any[])=>{
      
      this.test=res;
      for(var i=0;i<this.test.length;i++){
        //console.log(this.test[i].testName)
        this.testNames.push([this.test[i].testName,this.test[i]._id])
      }
    })
  }
  navigateAddTestResults(i){
    this.router.navigate(['../test-form'],{queryParams:{id:this.test[i]._id,testName:this.test[i].testName},relativeTo:this.ar})
  }
}
