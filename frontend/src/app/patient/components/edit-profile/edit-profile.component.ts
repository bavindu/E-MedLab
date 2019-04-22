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
  private readOnly=true;
  private userDetailsFrom;
  private passwordDisplay=false;
  constructor(private fb:FormBuilder,private userService:UserService,private data:UserDataService) {

   }

  ngOnInit() {
    this.userDetailsFrom=this.fb.group({
      userName:['',Validators.required],
      email:['',Validators.required],
      newPassword:[],
      confirmPassword:[]

    },
      {
        validator: MustMatch('password', 'confirmPassword')
      });
    this.getUserProfile();
  }


  getUserProfile(){
    this.data.currentData.subscribe(user=>{
      this.user=user;
      console.log(user);
      console.log('ttt');
      (<FormControl>this.userDetailsFrom.get('userName')).setValue(this.user.username);
      (<FormControl>this.userDetailsFrom.get('email')).setValue(this.user.email);
    });

  }
 
  edit(){
    console.log('edit clicked');
    this.readOnly=false;
  }
  updateUserDetails(){

    this.userService.updateUser(this.userDetailsFrom.value).subscribe();
  }

  get newPassword(){return this.userDetailsFrom.get('newPassword')}

}
