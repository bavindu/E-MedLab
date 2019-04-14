import { Component, OnInit } from '@angular/core';
import { LoadTestService } from '../../../services/load-test.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-patient-testlist',
  templateUrl: './view-patient-testlist.component.html',
  styleUrls: ['./view-patient-testlist.component.css']
})
export class ViewPatientTestlistComponent implements OnInit {

  constructor(private loadTestService:LoadTestService,private router:Router) { }

  private testList=[];


  ngOnInit() {
    this.createTestList();
  }

  createTestList(){
    this.loadTestService.loadTestofPatient().subscribe((data:any)=>{
      data.forEach(element => {
        this.testList.push(element);
      });

    })
  }

  navigateTest(i){
    console.log(this.testList[i]._id);
    this.router.navigate(['/view-myTest'],{queryParams:{id:this.testList[i]._id}});
  }

}
