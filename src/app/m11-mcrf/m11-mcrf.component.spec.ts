import { ComponentFixture, TestBed } from '@angular/core/testing';

import { M11MCRFComponent } from './m11-mcrf.component';

describe('M11MCRFComponent', () => {
  let component: M11MCRFComponent;
  let fixture: ComponentFixture<M11MCRFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ M11MCRFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(M11MCRFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
