import {Component, Inject, OnInit} from '@angular/core';
import {ObservationService} from "../../../services/observation.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";


@Component({
  selector: 'app-edit-observation',
  templateUrl: './edit-observation.component.html',
  styleUrls: ['./edit-observation.component.css']
})
export class EditObservationComponent implements OnInit {

  constructor(private observationService:ObservationService,private dialog:MatDialog) { }
  private searchText:string;
  private observationNames=[];
  private testWithObservations=[];
  ngOnInit() {
    this.getObservationList();
  }

  getObservationList(){
    this.observationService.getObservationList().subscribe((data:any)=>{
      console.log(data);
      for (let i = 0; i < data.length; i++) {
        this.observationNames.push(data[i]);
      }
      console.log(this.observationNames)
    })
  }

  deleteObservation(id,i){
    console.log(id);
    this.observationService.deleteObservation(id).subscribe((res:any)=>{
      console.log("response "+JSON.stringify(res));
      if(res.length !== 0){
        this.testWithObservations.length=0;
        for (let j = 0; j <res.length ; j++) {
          console.log(res[j].testName);
          this.testWithObservations.push({'testName':res[j].testName,'id':res[j]._id})
        }
        console.log(this.testWithObservations);
        this.openConfirmationDialog();
      }
    });
  }
  openConfirmationDialog() {
    const dialogRef=this.dialog.open(DeleteObservationConfirmationDialog, {
      width: '400px',
      data:{'datalist':this.testWithObservations}

    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');

    });
  }

}


@Component({
  selector: 'delete-observation-confirmation-dialog',
  templateUrl: 'delete-observation-confirmation-dialog.html',
})
export class DeleteObservationConfirmationDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteObservationConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onButtonClick(): void {
    this.dialogRef.close();
  }

}
