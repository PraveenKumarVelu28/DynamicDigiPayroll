import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdjustmentGenerateReportComponent } from './adjustment-generate-report.component';

describe('AdjustmentGenerateReportComponent', () => {
  let component: AdjustmentGenerateReportComponent;
  let fixture: ComponentFixture<AdjustmentGenerateReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdjustmentGenerateReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdjustmentGenerateReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
