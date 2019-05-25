import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-view-patients',
  templateUrl: './view-patients.component.html',
  styleUrls: ['./view-patients.component.css']
})
export class ViewPatientsComponent implements OnInit {
  private patientsList;
  constructor(
    private userService:UserService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.userService.getAllPatients().subscribe((res:any)=>{
      if(res){
        console.log("res "+JSON.stringify(res));
        this.patientsList=res;
      }
    })
  }

  navigate(i){
    this.router.navigate(['../view-patientinfo'],{queryParams:{_id:this.patientsList[i]._id},relativeTo:this.route})
  }

}
