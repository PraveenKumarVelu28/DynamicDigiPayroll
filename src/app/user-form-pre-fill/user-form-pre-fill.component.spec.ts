import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserFormPreFillComponent } from './user-form-pre-fill.component';

describe('UserFormPreFillComponent', () => {
  let component: UserFormPreFillComponent;
  let fixture: ComponentFixture<UserFormPreFillComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserFormPreFillComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserFormPreFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
