import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantDemolitionComponent } from './plant-demolition.component';

describe('PlantDemolitionComponent', () => {
  let component: PlantDemolitionComponent;
  let fixture: ComponentFixture<PlantDemolitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlantDemolitionComponent]
    });
    fixture = TestBed.createComponent(PlantDemolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
