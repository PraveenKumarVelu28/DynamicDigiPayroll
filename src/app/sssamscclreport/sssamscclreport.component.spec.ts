import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSSAMSCCLReportComponent } from './sssamscclreport.component';

describe('SSSAMSCCLReportComponent', () => {
  let component: SSSAMSCCLReportComponent;
  let fixture: ComponentFixture<SSSAMSCCLReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSSAMSCCLReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSSAMSCCLReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
