import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientToolbarComponent } from './patient-toolbar.component';

describe('PatientToolbarComponent', () => {
  let component: PatientToolbarComponent;
  let fixture: ComponentFixture<PatientToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
