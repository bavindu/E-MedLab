import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthAdminGuard implements CanActivate {
  private usertype;
  constructor(private userService:UserService,private router:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean{
      this.userService.getUserType().subscribe(data=>{
        this.usertype=data;
        if(!(this.usertype.userType==="admin") || !this.userService.isUserLoggedIn()){
          console.log("route error")
          this.router.navigateByUrl('/login');
          this.userService.deleteToken();
          return false;
        }
        
      })
      // if(!this.userService.isUserLoggedIn() && !(this.usertype==="admin") ){
      //   this.router.navigateByUrl('/login');
      //   this.userService.deleteToken();
      //   return false;
      // }
      
      
      
    return true;
  }
  
}
