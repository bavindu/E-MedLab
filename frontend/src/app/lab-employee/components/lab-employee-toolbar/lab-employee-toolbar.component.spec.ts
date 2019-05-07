import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEmployeeToolbarComponent } from './lab-employee-toolbar.component';

describe('LabEmployeeToolbarComponent', () => {
  let component: LabEmployeeToolbarComponent;
  let fixture: ComponentFixture<LabEmployeeToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabEmployeeToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEmployeeToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
