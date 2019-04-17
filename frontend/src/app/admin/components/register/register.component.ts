import { Component, OnInit } from '@angular/core';
import {FormBuilder,  Validators} from '@angular/forms'
import {RegisterService} from '../../../services/register.service'
import { Router } from '@angular/router';
import {MustMatch} from "../../../helpers/must-match.validator";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  constructor(private fb:FormBuilder,private registerService:RegisterService,private router:Router) {}

  ngOnInit() {
    this.registerForm=this.fb.group(
      {
        email:['',Validators.required,Validators.email],
        firstName:['',Validators.required],
        lastName:['',Validators.required],
        userName:['',Validators.required],
        password:['',Validators.required],
        userType:['',Validators.required],
        sex:['',Validators.required],
        confirmPassword:['',Validators.required]

      },
      {
        validator: MustMatch('password', 'confirmPassword')
      })
  }

  register(){
    if(this.registerForm.invalid){
      alert('Please enter correct information');
      return;
    }
    else{
      this.registerService.register(this.registerForm.value).subscribe();
      this.router.navigateByUrl('/admin-profile');
    }

  }
  get firstName() { return this.registerForm.get('firstName'); }
  get lastName() { return this.registerForm.get('lastName'); }
  get userName() { return this.registerForm.get('userName'); }
  get password() { return this.registerForm.get('password'); }
  get userType() { return this.registerForm.get('userType'); }
  get email() { return this.registerForm.get('email'); }
  get sex() { return this.registerForm.get('sex'); }
  get confirmPassword() { return this.registerForm.get('confirmPassword'); }

}
