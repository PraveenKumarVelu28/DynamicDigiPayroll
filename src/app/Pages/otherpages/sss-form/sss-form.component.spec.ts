import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SssFormComponent } from './sss-form.component';

describe('SssFormComponent', () => {
  let component: SssFormComponent;
  let fixture: ComponentFixture<SssFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SssFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SssFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
