import { Component, OnInit } from '@angular/core';
import {TestFormService} from "../services/test-form.service";
import {element} from "protractor";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-added-test-results-list',
  templateUrl: './view-added-test-results-list.component.html',
  styleUrls: ['./view-added-test-results-list.component.css']
})
export class ViewAddedTestResultsListComponent implements OnInit {

  constructor(
    private testFormService:TestFormService,
    private router:Router,
    private route:ActivatedRoute
  ) { }
  private testList=[];
  ngOnInit() {
    this.testFormService.getAllTestList().subscribe((res:any)=>{
      console.log(JSON.stringify(res));
      res.forEach((element)=>{
        this.testList.push(element);
      })
    })
  }

  navigateTest(i){
    console.log(this.testList[i]._id);
    this.router.navigate(['../view-patient-test'],{queryParams:{id:this.testList[i]._id,patientName:this.testList[i].patientId.userName},relativeTo:this.route})

  }


}
