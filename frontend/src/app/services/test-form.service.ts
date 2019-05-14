import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TestResults } from '../models/test-results.model';

@Injectable({
  providedIn: 'root'
})
export class TestFormService {

  constructor(private http:HttpClient) { }

  addTestResults(testFormValue){
    return this.http.post('http://localhost:3000/api/addTestResults',testFormValue);
  }
  searchPatient(name){
    return this.http.post('http://localhost:3000/api/search-patient',name);
  }
  getTestResults(testId){
    return this.http.get('http://localhost:3000/api/getTestRecord',{params:{Id:testId}})
  }

  getManyTest(testidlist){
    return this.http.get('http://localhost:3000/api/getManyTestRecord',{params:{IdList:testidlist}})
  }

}

