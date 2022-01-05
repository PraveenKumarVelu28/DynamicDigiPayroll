import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfLoanComponent } from './certificate-of-loan.component';

describe('CertificateOfLoanComponent', () => {
  let component: CertificateOfLoanComponent;
  let fixture: ComponentFixture<CertificateOfLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateOfLoanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOfLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
