import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  constructor(private userService:UserService) { }
  private name;
  private email;
  private userDetails;
  ngOnInit() {
    this.getUserProfile();
    
  }

  getUserProfile(){
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user']
        this.name=this.userDetails['userName']
        this.email=this.userDetails['email']
      }
    )

    
  }

}
