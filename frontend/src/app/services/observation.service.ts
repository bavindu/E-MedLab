import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ObservationService {

  constructor(private http:HttpClient) { }

  addObservations(observation){
    return this.http.post('api/addObservation',observation);
    
  }

  getObservationList(){
    return this.http.get('api/getobservationList');
  }
  deleteClickObservation(observationId){
    return this.http.post('api/deleteClickMetaObservation',{'observationId':observationId});
  }
  deleteObservation(observationId){
    return this.http.post('api/deleteMetaObservation',{'observationId':observationId});
  }
}
