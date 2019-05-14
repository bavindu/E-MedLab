import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadMultiplePdfComponent } from './download-multiple-pdf.component';

describe('DownloadMultiplePdfComponent', () => {
  let component: DownloadMultiplePdfComponent;
  let fixture: ComponentFixture<DownloadMultiplePdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadMultiplePdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadMultiplePdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
