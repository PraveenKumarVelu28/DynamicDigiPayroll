import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bir1604CFComponent } from './bir1604-cf.component';

describe('Bir1604CFComponent', () => {
  let component: Bir1604CFComponent;
  let fixture: ComponentFixture<Bir1604CFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Bir1604CFComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Bir1604CFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
