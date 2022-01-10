import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir2316Component } from './bir2316.component';

describe('Bir2316Component', () => {
  let component: Bir2316Component;
  let fixture: ComponentFixture<Bir2316Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir2316Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir2316Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
