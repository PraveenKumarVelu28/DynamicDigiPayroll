import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtRatesFormComponent } from './ot-rates-form.component';

describe('OtRatesFormComponent', () => {
  let component: OtRatesFormComponent;
  let fixture: ComponentFixture<OtRatesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OtRatesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OtRatesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
