import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LoadTestService {

  constructor(private http:HttpClient) { }

  loadTest(){
    return this.http.get('api/load-test');
  }
  loadTestofPatient(){
    return this.http.get('api/getTestRecordName');
  }


}
