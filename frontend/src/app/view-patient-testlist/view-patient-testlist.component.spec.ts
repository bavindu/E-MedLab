import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPatientTestlistComponent } from './view-patient-testlist.component';

describe('ViewPatientTestlistComponent', () => {
  let component: ViewPatientTestlistComponent;
  let fixture: ComponentFixture<ViewPatientTestlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewPatientTestlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewPatientTestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
