import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {TestFormService} from "../../../services/test-form.service";

@Component({
  selector: 'app-view-patientinfo',
  templateUrl: './view-patientinfo.component.html',
  styleUrls: ['./view-patientinfo.component.css']
})
export class ViewPatientinfoComponent implements OnInit {

  private patient;
  private patientstestlis;

  constructor(
    private route:ActivatedRoute,
    private userService:UserService,
    private testFormService:TestFormService,
    private router:Router,
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe((params:any)=>{
      console.log("ID "+params._id);
      this.userService.getPatient(params._id).subscribe((res:any)=>{
        console.log('patient '+JSON.stringify(res));
        this.patient=res;
      })
      this.testFormService.getPatientsTestRecords(params._id).subscribe((res:any)=>{
        console.log("patient tests "+JSON.stringify(res));
        this.patientstestlis=res;
      })

    })
  }

  navigate(i){
    this.router.navigate(['../view-patient-test'],{queryParams:{id:this.patientstestlis[i]._id,patientName:this.patient.userName},relativeTo:this.route})
  }

}
