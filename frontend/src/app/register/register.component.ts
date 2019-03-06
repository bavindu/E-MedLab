import { Component, OnInit } from '@angular/core';
import {FormBuilder} from '@angular/forms'
import {RegisterService} from '../services/register.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  private registerForm;
  constructor(private fb:FormBuilder,private registerService:RegisterService) { 
    this.registerForm=this.fb.group(
      {
        email:[''],
        userName:[''],
        password:[''],
        confirmPassword:['']
  
      }
    )
  }

  ngOnInit() {
  
  }

  register(){
    this.registerService.register(this.registerForm.value).subscribe();
  }

}
