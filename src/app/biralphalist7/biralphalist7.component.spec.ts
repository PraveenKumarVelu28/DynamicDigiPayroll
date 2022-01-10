import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Biralphalist7Component } from './biralphalist7.component';

describe('Biralphalist7Component', () => {
  let component: Biralphalist7Component;
  let fixture: ComponentFixture<Biralphalist7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Biralphalist7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Biralphalist7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
