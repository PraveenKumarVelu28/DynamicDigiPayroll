import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyAdjustmentFormComponent } from './company-adjustment-form.component';

describe('CompanyAdjustmentFormComponent', () => {
  let component: CompanyAdjustmentFormComponent;
  let fixture: ComponentFixture<CompanyAdjustmentFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyAdjustmentFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyAdjustmentFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
