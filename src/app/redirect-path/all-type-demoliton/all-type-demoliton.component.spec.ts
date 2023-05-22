import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTypeDemolitonComponent } from './all-type-demoliton.component';

describe('AllTypeDemolitonComponent', () => {
  let component: AllTypeDemolitonComponent;
  let fixture: ComponentFixture<AllTypeDemolitonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTypeDemolitonComponent]
    });
    fixture = TestBed.createComponent(AllTypeDemolitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
