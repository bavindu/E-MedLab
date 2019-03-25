import { Component, OnInit } from '@angular/core';

export interface TestForm {
  observationName: string ;
  observationValue: string;
  unit: string;
  referenceRange: string;
}

@Component({
  selector: 'app-view-test',
  templateUrl: './view-test.component.html',
  styleUrls: ['./view-test.component.css']
})
export class ViewTestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
