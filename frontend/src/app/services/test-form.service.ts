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

}

