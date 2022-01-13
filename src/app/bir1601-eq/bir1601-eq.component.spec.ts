import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir1601EQComponent } from './bir1601-eq.component';

describe('Bir1601EQComponent', () => {
  let component: Bir1601EQComponent;
  let fixture: ComponentFixture<Bir1601EQComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir1601EQComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir1601EQComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
