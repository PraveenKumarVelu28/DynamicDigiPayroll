import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaveTypeFornComponent } from './leave-type-forn.component';

describe('LeaveTypeFornComponent', () => {
  let component: LeaveTypeFornComponent;
  let fixture: ComponentFixture<LeaveTypeFornComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LeaveTypeFornComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaveTypeFornComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
