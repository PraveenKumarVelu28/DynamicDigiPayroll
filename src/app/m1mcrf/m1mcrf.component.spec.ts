import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M1mcrfComponent } from './m1mcrf.component';

describe('M1mcrfComponent', () => {
  let component: M1mcrfComponent;
  let fixture: ComponentFixture<M1mcrfComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M1mcrfComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M1mcrfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
