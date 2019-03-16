import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {LoginInfo} from '../models/loginInfo.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }

  noAuthHeader={headers:new HttpHeaders({'noauth':'true'})};

  login(info:LoginInfo){
    return this.http.post('http://localhost:3000/api/login',info,this.noAuthHeader);
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }

  getUserProfile(){
    console.log('inside frontend grtUserProfile');
    return this.http.get('http://localhost:3000/api/userProfile');
  }




}
