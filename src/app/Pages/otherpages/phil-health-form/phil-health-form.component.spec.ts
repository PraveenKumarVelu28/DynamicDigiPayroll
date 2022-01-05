import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhilHealthFormComponent } from './phil-health-form.component';

describe('PhilHealthFormComponent', () => {
  let component: PhilHealthFormComponent;
  let fixture: ComponentFixture<PhilHealthFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhilHealthFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhilHealthFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
