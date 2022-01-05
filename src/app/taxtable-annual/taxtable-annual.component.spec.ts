import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaxtableAnnualComponent } from './taxtable-annual.component';

describe('TaxtableAnnualComponent', () => {
  let component: TaxtableAnnualComponent;
  let fixture: ComponentFixture<TaxtableAnnualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaxtableAnnualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TaxtableAnnualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
