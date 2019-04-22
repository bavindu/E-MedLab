import {Component, Inject, OnInit} from '@angular/core';
import {MetaTestService} from "../../../services/meta-test.service";
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-edit-test',
  templateUrl: './edit-test.component.html',
  styleUrls: ['./edit-test.component.css']
})
export class EditTestComponent implements OnInit {

  private testNames=[];
  private searchText;
  constructor(private metaTestService:MetaTestService,private dialog:MatDialog) { }

  ngOnInit() {
    this.getTestName();
  }

  getTestName(){
    this.metaTestService.getMetaTestName().subscribe((data:any)=>{
      console.log(data.length);
      for (let i = 0; i < data.length; i++) {
        console.log(data[i].testName);
        this.testNames.push(data[i]);

      }
      // console.log("test names "+JSON.stringify(data));
    })
  }

  delete(id,i){
    this.openConfirmationDialog().afterClosed().subscribe(result=>{
      if(result===true){
        console.log('True');
        this.metaTestService.deleteMetaTest(id).subscribe(
          data=>{
            console.log(data);
            this.testNames.splice(i,1);
            console.log(this.testNames)
          },
          error=>{
            console.log(error.status);
          }
        );
      }
      else{
        console.log('False');
      }
    });

  }

  openConfirmationDialog() {
    return this.dialog.open(DeleteConfirmationDialog, {
      width: '250px'

    });
  }



}

@Component({
  selector: 'delete-confirmation-dialog',
  templateUrl: 'delete-confirmation-dialog.html',
})
export class DeleteConfirmationDialog {

  constructor(
    public dialogRef: MatDialogRef<DeleteConfirmationDialog>,
    @Inject(MAT_DIALOG_DATA) public data) {}

  onButtonClick(): void {
    this.dialogRef.close();
  }

}
