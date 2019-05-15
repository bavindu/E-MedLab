import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { TestResults } from '../models/test-results.model';

@Injectable({
  providedIn: 'root'
})
export class TestFormService {

  constructor(private http:HttpClient) { }

  addTestResults(testFormValue){
    return this.http.post('api/addTestResults',testFormValue);
  }
  searchPatient(name){
    return this.http.post('api/search-patient',name);
  }
  getTestResults(testId){
    return this.http.get('api/getTestRecord',{params:{Id:testId}})
  }

  getManyTest(testidlist){
    return this.http.get('api/getManyTestRecord',{params:{IdList:testidlist}})
  }

}

