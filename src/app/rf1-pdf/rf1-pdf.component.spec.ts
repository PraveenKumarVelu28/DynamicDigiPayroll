import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RF1PDFComponent } from './rf1-pdf.component';

describe('RF1PDFComponent', () => {
  let component: RF1PDFComponent;
  let fixture: ComponentFixture<RF1PDFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RF1PDFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RF1PDFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
