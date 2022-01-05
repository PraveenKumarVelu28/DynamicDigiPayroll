import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhillHealthComponent } from './phill-health.component';

describe('PhillHealthComponent', () => {
  let component: PhillHealthComponent;
  let fixture: ComponentFixture<PhillHealthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhillHealthComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhillHealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
