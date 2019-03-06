import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }


  deleteToken(){
    localStorage.removeItem('token');
  }
  getUserPayLoad(){
    var token=localStorage.getItem('token');
    if(token){
      var userPayLoad=atob(token.split('.')[1]);
      return JSON.parse(userPayLoad);
    }
    else{
      return null;
    }
  }
  isUserLoggedIn(){
    var userPayLoad=this.getUserPayLoad();
    if(userPayLoad){
      return userPayLoad.exp>Date.now()/1000
    }
    else{
      return false;
    }
  }
}
