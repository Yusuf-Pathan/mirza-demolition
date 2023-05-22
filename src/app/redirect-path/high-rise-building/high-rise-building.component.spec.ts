import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighRiseBuildingComponent } from './high-rise-building.component';

describe('HighRiseBuildingComponent', () => {
  let component: HighRiseBuildingComponent;
  let fixture: ComponentFixture<HighRiseBuildingComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighRiseBuildingComponent]
    });
    fixture = TestBed.createComponent(HighRiseBuildingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
