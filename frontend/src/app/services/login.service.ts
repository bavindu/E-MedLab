import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import {LoginInfo} from '../models/loginInfo.model'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }


  login(info:LoginInfo){
    console.log(info);
    return this.http.post('http://localhost:3000/api/login',info);
  }

  setToken(token:string){
    localStorage.setItem('token',token);
  }




}
