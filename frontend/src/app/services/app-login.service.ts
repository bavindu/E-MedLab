import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppLoginService {

  constructor() { }

  private dataSource=new Subject<boolean>();
  isLoggedIN=this.dataSource.asObservable();


  loginTrigger(value:boolean){    //to show logout button
    this.dataSource.next(value);
  }
  logoutTrigger(value:boolean){
    this.dataSource.next(value);
  }
  
}
