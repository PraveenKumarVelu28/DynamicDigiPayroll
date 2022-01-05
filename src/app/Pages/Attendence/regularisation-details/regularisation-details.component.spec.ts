import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegularisationDetailsComponent } from './regularisation-details.component';

describe('RegularisationDetailsComponent', () => {
  let component: RegularisationDetailsComponent;
  let fixture: ComponentFixture<RegularisationDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegularisationDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegularisationDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
