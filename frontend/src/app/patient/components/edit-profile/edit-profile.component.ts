import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { UserDataService } from '../../services/user-data.service';
import {MustMatch} from "../../../helpers/must-match.validator";

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  private user;
  private userDetails:FormGroup;
  private readOnly=true;
  private userDetailsFrom;
   passwordDisplay=false;
  constructor(private fb:FormBuilder,private userService:UserService,private data:UserDataService) {

   }

  ngOnInit() {
    this.getUserProfile();
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
  }

}
