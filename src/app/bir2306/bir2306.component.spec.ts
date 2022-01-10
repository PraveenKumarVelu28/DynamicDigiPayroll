import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir2306Component } from './bir2306.component';

describe('Bir2306Component', () => {
  let component: Bir2306Component;
  let fixture: ComponentFixture<Bir2306Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir2306Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir2306Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
