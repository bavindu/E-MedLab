import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateTestService } from '../services/create-test.service';

@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  private id;
  private testTemplate;
  constructor(private route:ActivatedRoute,private createTestService:CreateTestService) { }

  ngOnInit() {
    this.createTestForm();
  }
  createTestForm(){
    this.route.queryParams.subscribe(params=>{
      this.id=params.id;
      this.createTestService.getTest(this.id).subscribe((res)=>{
        this.testTemplate=res;
        console.log(this.testTemplate)
      });

    });
  }
}
