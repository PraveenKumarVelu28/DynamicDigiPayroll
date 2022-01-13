import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir1604CComponent } from './bir1604-c.component';

describe('Bir1604CComponent', () => {
  let component: Bir1604CComponent;
  let fixture: ComponentFixture<Bir1604CComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir1604CComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir1604CComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
