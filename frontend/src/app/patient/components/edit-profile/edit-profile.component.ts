import { Component, OnInit,Input } from '@angular/core';
import {FormBuilder, FormGroup, FormControl} from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { resolve } from 'url';
import { UserDataService } from '../../services/user-data.service';

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
  constructor(private fb:FormBuilder,private userService:UserService,private data:UserDataService) {
    this.userDetailsFrom=this.fb.group({
      userName:[],
      email:[''],

    })
   }

  ngOnInit() {
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
    
    // this.userService.getUserProfile().subscribe(
    //   res=>{
    //     this.userDetails=res['user'];
    //     this.stringName=this.userDetails['userName'];
    //     console.log("inside getUserProfile")
    //     this.name=this.userDetails['userName'];
    //     console.log(this.emailaddress)
    //     this.emailaddress=this.userDetails['email'];
    //     (<FormControl>this.userDetailsFrom.get('userName')).setValue(this.user.username);
    //     (<FormControl>this.userDetailsFrom.get('email')).setValue(this.user.email);
        
    //   }
    // )
    
    
  }
 
  edit(){
    console.log('edit clicked')
    this.readOnly=false;
  }
  updateUserDetails(){

    this.userService.updateUser(this.userDetailsFrom.value).subscribe();
  }

}
