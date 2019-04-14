import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LabEmployeeEditProfileComponent } from './lab-employee-edit-profile.component';

describe('LabEmployeeEditProfileComponent', () => {
  let component: LabEmployeeEditProfileComponent;
  let fixture: ComponentFixture<LabEmployeeEditProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LabEmployeeEditProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LabEmployeeEditProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
