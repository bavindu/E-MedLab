import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../services/user.service";
import {MustMatch} from "../../../helpers/must-match.validator";
import {ActivatedRoute, Router} from "@angular/router";


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
  private passwordDisplay=false;

  constructor(private fb:FormBuilder,private userService:UserService,private router:Router,private ar:ActivatedRoute) {
    this.userDetailsFrom=this.fb.group({
      firstName:['',Validators.required],
      lastName:['',Validators.required],
      userName:['',Validators.required],
      email:['',Validators.required],
      newPassword:[''],
      confirmPassword:['']

    },
      {
        validator: MustMatch('newPassword', 'confirmPassword')
      })
  }

  ngOnInit() {
    this.getUserProfile();
  }

  getUserProfile() {
    this.userService.getUserProfile().subscribe(data=>{
      this.user=data;
      console.log(this.user.user);
      this.setvalues(this.user);
    });


  }

  setvalues(data){
    (<FormControl>this.userDetailsFrom.get('userName')).setValue(data.user.userName);
    (<FormControl>this.userDetailsFrom.get('email')).setValue(data.user.email);
    (<FormControl>this.userDetailsFrom.get('firstName')).setValue(data.user.firstName);
    (<FormControl>this.userDetailsFrom.get('lastName')).setValue(data.user.lastName);
  }

  edit(){
    console.log('edit clicked');
    if(this.readOnly===true){
      this.readOnly=false;
    }
    else{
      this.readOnly=true;
    }
  }
  
  onPasswordChangeClick(){
    if(this.passwordDisplay===false){
      this.passwordDisplay=true;
    }
    else{
      this.passwordDisplay=false;
      this.newPassword.reset();
      this.confirmPassword.reset();
    }
  }

  reset(){
    this.setvalues(this.user);
    this.readOnly=true;
  }

  get newPassword(){return this.userDetailsFrom.get('newPassword')}
  get confirmPassword(){return this.userDetailsFrom.get('confirmPassword')}

  updateUserDetails(){
    if(this.readOnly===false){
      if(this.passwordDisplay===false && !this.userDetailsFrom.invalid){
        this.userService.updateUser(this.userDetailsFrom.value).subscribe();
      }
    }
    this.userService.updateUser(this.userDetailsFrom.value).subscribe();
    this.router.navigate(['../admin-profile'],{relativeTo:this.ar})
  }
}
