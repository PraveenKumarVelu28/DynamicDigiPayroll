import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CertificateOfContributionComponent } from './certificate-of-contribution.component';

describe('CertificateOfContributionComponent', () => {
  let component: CertificateOfContributionComponent;
  let fixture: ComponentFixture<CertificateOfContributionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CertificateOfContributionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CertificateOfContributionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
