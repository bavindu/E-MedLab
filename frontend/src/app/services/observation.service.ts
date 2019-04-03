import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http:HttpClient) { }

  addObservations(observation){
    return this.http.post('http://localhost:3000/api/addObservation',observation);
    
  }

  getObservationList(){
    return this.http.get('http://localhost:3000/api/getobservationList');
  }
}
