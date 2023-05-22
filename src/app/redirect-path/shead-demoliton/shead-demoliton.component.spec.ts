import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SheadDemolitonComponent } from './shead-demoliton.component';

describe('SheadDemolitonComponent', () => {
  let component: SheadDemolitonComponent;
  let fixture: ComponentFixture<SheadDemolitonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SheadDemolitonComponent]
    });
    fixture = TestBed.createComponent(SheadDemolitonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
