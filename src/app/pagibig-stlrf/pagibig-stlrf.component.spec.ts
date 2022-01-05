import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagibigSTLRFComponent } from './pagibig-stlrf.component';

describe('PagibigSTLRFComponent', () => {
  let component: PagibigSTLRFComponent;
  let fixture: ComponentFixture<PagibigSTLRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagibigSTLRFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagibigSTLRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
