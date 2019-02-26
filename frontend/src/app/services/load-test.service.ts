import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadTestService {

  constructor(private http:HttpClient) { }

  loadTest(){
    return this.http.get('http://localhost:3000/api/load-test');
  }


}
