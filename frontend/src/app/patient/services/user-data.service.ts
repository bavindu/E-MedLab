import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject'
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  private datasource= new BehaviorSubject<User>(new User());
  currentData= this.datasource.asObservable()
  constructor() { }

  changeData(user:User){
    this.datasource.next(user);
  }
}
