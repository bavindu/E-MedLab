import { Component, OnInit } from '@angular/core';
import {LoadTestService} from "../../../services/load-test.service";
import {TestFormService} from "../../../services/test-form.service";
import * as jsPDF from 'jspdf';
import {CreatePdfService} from "../../../services/create-pdf.service";
import {UserService} from "../../../services/user.service";

@Component({
  selector: 'app-download-multiple-pdf',
  templateUrl: './download-multiple-pdf.component.html',
  styleUrls: ['./download-multiple-pdf.component.css']
})
export class DownloadMultiplePdfComponent implements OnInit {

  private testList=[];
  private selectedValues=[];
  private user;

  constructor(
    private loadTestService:LoadTestService,
    private testformService:TestFormService,
    private createPDF:CreatePdfService,
    private userService:UserService) { }

  ngOnInit() {
    this.userService.getUserProfile().subscribe((user:any) => {
      this.user = user.user;
      console.log('user '+JSON.stringify(user))
    });
    this.createTestList();
  }

  createTestList(){
    this.loadTestService.loadTestofPatient().subscribe((data:any)=>{
      data.forEach(element => {
        this.testList.push(element);
      });

    })
  }

  download(){
    if(this.selectedValues.length>0){
      this.testformService.getManyTest(this.selectedValues).subscribe((res:any)=>{
        console.log(res);
        const doc = new jsPDF('p', 'mm', 'a4');
        console.log(doc.getFontList());
        for (let i = 0; i <res.length ; i++) {
          if(i>0){
            doc.addPage();
          }
          console.log(res[i].testName);
          this.createPDF.createPDF(res[i],this.user,doc);
        }
        doc.save('testreport.pdf');
      });
    }
  }

}
