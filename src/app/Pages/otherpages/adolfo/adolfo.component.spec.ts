import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdolfoComponent } from './adolfo.component';

describe('AdolfoComponent', () => {
  let component: AdolfoComponent;
  let fixture: ComponentFixture<AdolfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdolfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdolfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
