import { ComponentFixture, TestBed } from '@angular/core/testing';

import { R1aFormComponent } from './r1a-form.component';

describe('R1aFormComponent', () => {
  let component: R1aFormComponent;
  let fixture: ComponentFixture<R1aFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ R1aFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(R1aFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
