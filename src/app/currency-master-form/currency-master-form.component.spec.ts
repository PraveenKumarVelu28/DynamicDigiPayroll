import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrencyMasterFormComponent } from './currency-master-form.component';

describe('CurrencyMasterFormComponent', () => {
  let component: CurrencyMasterFormComponent;
  let fixture: ComponentFixture<CurrencyMasterFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CurrencyMasterFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CurrencyMasterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
