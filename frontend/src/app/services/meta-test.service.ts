import { Injectable } from '@angular/core';
import {MetaTest} from '../models/meta-Test.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MetaTestService {

  constructor(private http:HttpClient) { }

  addTestTemplate(metaTest:MetaTest){
    console.log('on Add Test Template');
    console.log(metaTest);
    return this.http.post('http://localhost:3000/api/addMetaTest',metaTest);
    
  }

  getMetaTestName(){
    return this.http.get('http://localhost:3000/api/getAllMetaTestName');
  }
  deleteMetaTest(id){
    console.log("inside service "+id);
    return this.http.post('http://localhost:3000/api/deleteMetaTest',{'id':id});
  }
}
