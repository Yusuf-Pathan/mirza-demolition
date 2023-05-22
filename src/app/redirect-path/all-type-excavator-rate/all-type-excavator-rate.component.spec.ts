import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeExcavatorRateComponent } from './all-type-excavator-rate.component';

describe('AllTypeExcavatorRateComponent', () => {
  let component: AllTypeExcavatorRateComponent;
  let fixture: ComponentFixture<AllTypeExcavatorRateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTypeExcavatorRateComponent]
    });
    fixture = TestBed.createComponent(AllTypeExcavatorRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
