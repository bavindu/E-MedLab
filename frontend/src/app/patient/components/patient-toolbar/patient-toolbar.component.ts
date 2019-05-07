import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-patient-toolbar',
  templateUrl: './patient-toolbar.component.html',
  styleUrls: ['./patient-toolbar.component.css']
})
export class PatientToolbarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  ngOnInit() {
  }
  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }

}
