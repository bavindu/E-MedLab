import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';
import { ObservationService } from 'src/app/services/observation.service';
import { EventEmitterService } from 'src/app/services/event-emitter.service';


@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class PopupAddComponent implements OnInit {

  observationList= [];
  searchText:string;
  selectedOptions:string[];

  constructor(
    private dialogRef:MatDialogRef<PopupAddComponent>,
    private observationService:ObservationService,
    private eventEmitterService:EventEmitterService
    ) { }

  ngOnInit() {
    console.log("popUP")
    this.loadObservationList();
  }

  close(){
    this.dialogRef.close();
  }

  loadObservationList(){
    this.observationService.getObservationList().subscribe((data:any)=>{
      data.forEach(element => {
        this.observationList.push(element);
      });
    });
    console.log(this.observationList)
    

  }

  addObservation(){
    this.eventEmitterService.onCreateComponentButtonClick(this.selectedOptions);
    this.dialogRef.close();
    // this.selectedOptions.forEach(element => {
      
    // });
  }

}
