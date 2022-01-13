import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirAnnualizationComponent } from './bir-annualization.component';

describe('BirAnnualizationComponent', () => {
  let component: BirAnnualizationComponent;
  let fixture: ComponentFixture<BirAnnualizationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BirAnnualizationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BirAnnualizationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
