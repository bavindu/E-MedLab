
import { Injectable, EventEmitter } from '@angular/core';    
import { Subscription } from 'rxjs/internal/Subscription';    
    
@Injectable({    
  providedIn: 'root'    
})    
export class EventEmitterService {    
    
  invokeCreateTestComponentFunction = new EventEmitter();    
  subsVar: Subscription;    
    
  constructor() { }    
    
  onCreateComponentButtonClick(selectedOptions) {    
    this.invokeCreateTestComponentFunction.emit(selectedOptions);    
  }    
} 
