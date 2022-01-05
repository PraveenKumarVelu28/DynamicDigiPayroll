import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagibigSTLRFExcelComponent } from './pagibig-stlrfexcel.component';

describe('PagibigSTLRFExcelComponent', () => {
  let component: PagibigSTLRFExcelComponent;
  let fixture: ComponentFixture<PagibigSTLRFExcelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagibigSTLRFExcelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagibigSTLRFExcelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
