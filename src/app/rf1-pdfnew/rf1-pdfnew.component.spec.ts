import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RF1PDFNewComponent } from './rf1-pdfnew.component';

describe('RF1PDFNewComponent', () => {
  let component: RF1PDFNewComponent;
  let fixture: ComponentFixture<RF1PDFNewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RF1PDFNewComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RF1PDFNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
