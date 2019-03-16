import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {RegisterService} from '../services/register.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  constructor(private fb:FormBuilder,private registerService:RegisterService,private router:Router) { 
    this.registerForm=this.fb.group(
      {
        email:[''],
        userName:[''],
        password:[''],
        userType:[''],
        confirmPassword:['']
  
      }
    )
  }

  ngOnInit() {
  
  }

  register(){
    this.registerService.register(this.registerForm.value).subscribe();
    this.router.navigateByUrl('/admin-profile');
  }

}
