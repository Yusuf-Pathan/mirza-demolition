import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboticDemolitionComponent } from './robotic-demolition.component';

describe('RoboticDemolitionComponent', () => {
  let component: RoboticDemolitionComponent;
  let fixture: ComponentFixture<RoboticDemolitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RoboticDemolitionComponent]
    });
    fixture = TestBed.createComponent(RoboticDemolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
