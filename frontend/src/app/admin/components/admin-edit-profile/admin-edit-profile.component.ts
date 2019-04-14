import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {UserService} from "../../../services/user.service";


@Component({
  selector: 'app-admin-edit-profile',
  templateUrl: './admin-edit-profile.component.html',
  styleUrls: ['./admin-edit-profile.component.css']
})
export class AdminEditProfileComponent implements OnInit {

  private user;
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

  getUserProfile() {
    this.userService.getUserProfile().subscribe(data=>{
      this.user=data;
      console.log(this.user.user);
      (<FormControl>this.userDetailsFrom.get('userName')).setValue(this.user.user.username);
      (<FormControl>this.userDetailsFrom.get('email')).setValue(this.user.user.email);
    });


  }

  edit(){
    console.log('edit clicked');
    this.readOnly=false;
  }
  updateUserDetails(){

    this.userService.updateUser(this.userDetailsFrom.value).subscribe();
  }

}
