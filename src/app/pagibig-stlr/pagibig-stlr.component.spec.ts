import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagibigSTLRComponent } from './pagibig-stlr.component';

describe('PagibigSTLRComponent', () => {
  let component: PagibigSTLRComponent;
  let fixture: ComponentFixture<PagibigSTLRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagibigSTLRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagibigSTLRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
