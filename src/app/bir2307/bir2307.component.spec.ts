import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir2307Component } from './bir2307.component';

describe('Bir2307Component', () => {
  let component: Bir2307Component;
  let fixture: ComponentFixture<Bir2307Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir2307Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir2307Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
