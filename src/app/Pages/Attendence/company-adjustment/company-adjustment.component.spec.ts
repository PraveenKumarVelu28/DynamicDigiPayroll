import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdjustmentComponent } from './company-adjustment.component';

describe('CompanyAdjustmentComponent', () => {
  let component: CompanyAdjustmentComponent;
  let fixture: ComponentFixture<CompanyAdjustmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdjustmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdjustmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
