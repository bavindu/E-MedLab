import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/models/user.model';
import { UserDataService } from '../../services/user-data.service';


@Component({
  selector: 'app-patient-profile',
  templateUrl: './patient-profile.component.html',
  styleUrls: ['./patient-profile.component.css']
})
export class PatientProfileComponent implements OnInit {

  constructor(private userService:UserService,private data:UserDataService) { }
  
  private userDetails;
  private user=new User;
  ngOnInit() {
    this.getUserProfile();
    
  }

  async getUserProfile (){
    
    await this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
        this.user.firstName=this.userDetails['firstName'];
        this.user.lastName=this.userDetails['lastName'];
        this.user.username=this.userDetails['userName'];
        this.user.birthDay=this.userDetails['birthDay'];
        this.user.email=this.userDetails['email'];
        this.user.sex=this.userDetails['sex'];
        console.log("User Name  "+this.user.username);
        this.data.changeData(this.user)
        
      }
    )

    
  }

}
