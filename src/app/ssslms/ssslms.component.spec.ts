import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SSSLMSComponent } from './ssslms.component';

describe('SSSLMSComponent', () => {
  let component: SSSLMSComponent;
  let fixture: ComponentFixture<SSSLMSComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SSSLMSComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SSSLMSComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
