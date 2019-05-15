import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CreateTestService {

  constructor(private http:HttpClient) { }

  getTest(_id){
    return this.http.get('api/get-test',{params:{id:_id}})
  }
}
