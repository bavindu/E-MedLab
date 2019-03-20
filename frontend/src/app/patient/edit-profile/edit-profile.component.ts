import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { resolve } from 'url';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  private name;
  private stringName:string;
  private lastName="Namal";
  private emailaddress;
  private userDetails:FormGroup;
  private readOnly=true;
  private userDetailsFrom;
  constructor(private fb:FormBuilder,private userService:UserService) {
    this.userDetailsFrom=this.fb.group({
      userName:[],
      email:[''],

    })
   }

  ngOnInit() {
    this.getUserProfile();
  }


  getUserProfile(){
    this.userService.getUserProfile().subscribe(
      res=>{
        this.userDetails=res['user'];
        this.stringName=this.userDetails['userName'];
        console.log("inside getUserProfile")
        this.name=this.userDetails['userName'];
        console.log(this.emailaddress)
        this.emailaddress=this.userDetails['email'];
        (<FormControl>this.userDetailsFrom.get('userName')).setValue(this.name);
        (<FormControl>this.userDetailsFrom.get('email')).setValue(this.emailaddress);
        
      }
    )
    
    
  }
 
  edit(){
    console.log('edit clicked')
    this.readOnly=false;
  }
  updateUserDetails(){
    this.userService.updateUser(this.userDetailsFrom.value).subscribe();
  }

}
