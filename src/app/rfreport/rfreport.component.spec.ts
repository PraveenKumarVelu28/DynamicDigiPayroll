import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFreportComponent } from './rfreport.component';

describe('RFreportComponent', () => {
  let component: RFreportComponent;
  let fixture: ComponentFixture<RFreportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RFreportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RFreportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
