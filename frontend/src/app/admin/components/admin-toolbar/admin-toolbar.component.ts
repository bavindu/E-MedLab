import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {AppLoginService} from "../../../services/app-login.service";

@Component({
  selector: 'app-admin-toolbar',
  templateUrl: './admin-toolbar.component.html',
  styleUrls: ['./admin-toolbar.component.css']
})
export class AdminToolbarComponent implements OnInit {

  constructor(private userService:UserService,private router:Router,private appLoginService:AppLoginService) { }

  ngOnInit() {
  }
  logout(){
    this.userService.deleteToken();
    this.router.navigateByUrl('/login');
  }
}
