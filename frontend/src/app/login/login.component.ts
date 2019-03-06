import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { LoginService } from '../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private loginform;
  private errmessage;
  constructor(private fb:FormBuilder,private loginService:LoginService,private router:Router) { }

  ngOnInit() {
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
        this.router.navigateByUrl('/admin-profile');
      },
      err=>{
        console.log(err);
        this.errmessage=err.error.message;

      }
    );
  }


}
