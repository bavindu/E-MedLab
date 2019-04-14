import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { FormBuilder,FormControl } from '@angular/forms';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-lab-employee-edit-profile',
  templateUrl: './lab-employee-edit-profile.component.html',
  styleUrls: ['./lab-employee-edit-profile.component.css']
})
export class LabEmployeeEditProfileComponent implements OnInit {

  private userDetailsFrom;
  private userDetails;
  private user=new User();

  constructor(private userService:UserService,private fb:FormBuilder) {
    this.userDetailsFrom=this.fb.group({
      userName:[],
      email:[''],

    })
   }

  ngOnInit() {
    this.getUserProfile();
  }
  async getUserProfile(){
    await this.userService.getUserProfile().subscribe(
      res=>{
        console.log(res);
        this.userDetails=res['user'];
        console.log(this.userDetails['userName'])
        this.user.username=this.userDetails['userName'];
        
        this.user.email=this.userDetails['email'];
        (<FormControl>this.userDetailsFrom.get('userName')).setValue(this.user.username);
        (<FormControl>this.userDetailsFrom.get('email')).setValue(this.user.email);
        
      }
    )
  }

}
