import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir1601CComponent } from './bir1601-c.component';

describe('Bir1601CComponent', () => {
  let component: Bir1601CComponent;
  let fixture: ComponentFixture<Bir1601CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir1601CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir1601CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
