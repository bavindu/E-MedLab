import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEmployeeProfileComponent } from './lab-employee-profile.component';

describe('LapEmployeeProfileComponent', () => {
  let component: LabEmployeeProfileComponent;
  let fixture: ComponentFixture<LabEmployeeProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabEmployeeProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEmployeeProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
