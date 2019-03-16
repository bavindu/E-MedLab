import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  

  deleteToken(){
    localStorage.removeItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }
  getUserPayLoad(){
    var token=this.getToken();
    if(token){
      var userPayLoad=atob(token.split('.')[1]);
      return JSON.parse(userPayLoad);
    }
    else{
      return null;
    }
  }

  getUserProfile(){
    return this.http.get('http://localhost:3000/api/userProfile');
  }

  isUserLoggedIn(){
    var userPayLoad=this.getUserPayLoad();
    if(userPayLoad){
      console.log(userPayLoad.exp>Date.now()/1000);
      return userPayLoad.exp>Date.now()/1000;

    }
    else{
      return false;
    }
  }
}