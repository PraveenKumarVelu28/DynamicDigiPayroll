import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1excelComponent } from './m1excel.component';

describe('M1excelComponent', () => {
  let component: M1excelComponent;
  let fixture: ComponentFixture<M1excelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1excelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1excelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
