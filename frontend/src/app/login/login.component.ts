import { Component, OnInit} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';
import { AppLoginService } from '../services/app-login.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginform;
  private errmessage;
  private isLoggedIn:boolean;
  private user;

  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router,private appLoginService:AppLoginService) { }
  
  ngOnInit() {
    this.appLoginService.isLoggedIN.subscribe(isLoggedIn=>this.isLoggedIn=isLoggedIn)
    this.loginform=this.fb.group({
      email:[''],
      password:['']
    })
  }

  login(){
    console.log('inside login')
    this.loginService.login(this.loginform.value).subscribe(
      res=>{
        this.loginService.setToken(res['token']);
        this.appLoginService.loginTrigger(true);
        this.loginService.getUserProfile().subscribe((res:any)=>{
          console.log(res);
          this.user=res.user;
          console.log(this.user.userType);
          if(this.user.userType=='patient'){
            console.log('patient true');
            this.router.navigateByUrl('/patient-profile');
          }
          else if(this.user.userType=='admin'){
            this.router.navigateByUrl('/admin-profile');
          }
          else if(this.user.userType=='labEmployee'){
            this.router.navigateByUrl('/lab-empolyee-profile');
          }
        }); 
      },
      err=>{
        console.log(err);
        this.errmessage=err.error.message;

      }
    );
  }


}
