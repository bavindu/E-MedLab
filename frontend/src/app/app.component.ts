import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';
import { AppLoginService } from './services/app-login.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private userService:UserService,private router:Router,private appLoginService:AppLoginService){}
  title = 'frontend';
  isLoggedIn=false;

  ngOnInit(){
    this.appLoginService.isLoggedIN.subscribe(isLoggedIn=>this.isLoggedIn=isLoggedIn);
    
  }

  logout(){
    this.userService.deleteToken();
    this.appLoginService.logoutTrigger(false);
    this.router.navigateByUrl('/login');
  }

  home(){
    console.log("inside home click")
    let gotData;
    this.userService.getUserType().subscribe((data)=>{
      gotData=data
      console.log(gotData.userType);
      if(gotData.userType==="patient"){
        this.router.navigateByUrl('/patient-profile')
      }
      else if(gotData.userType==="admin"){
        console.log("inside admin if")
        this.router.navigateByUrl('/admin-profile')
      }
    });
    
  }


}
