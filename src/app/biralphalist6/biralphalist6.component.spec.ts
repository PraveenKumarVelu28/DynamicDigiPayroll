import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biralphalist6Component } from './biralphalist6.component';

describe('Biralphalist6Component', () => {
  let component: Biralphalist6Component;
  let fixture: ComponentFixture<Biralphalist6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Biralphalist6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Biralphalist6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
