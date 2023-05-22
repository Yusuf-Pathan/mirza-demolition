import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecialDemolitonComponent } from './special-demoliton.component';

describe('SpecialDemolitonComponent', () => {
  let component: SpecialDemolitonComponent;
  let fixture: ComponentFixture<SpecialDemolitonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecialDemolitonComponent]
    });
    fixture = TestBed.createComponent(SpecialDemolitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
