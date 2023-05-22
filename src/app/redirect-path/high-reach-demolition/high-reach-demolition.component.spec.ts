import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighReachDemolitionComponent } from './high-reach-demolition.component';

describe('HighReachDemolitionComponent', () => {
  let component: HighReachDemolitionComponent;
  let fixture: ComponentFixture<HighReachDemolitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HighReachDemolitionComponent]
    });
    fixture = TestBed.createComponent(HighReachDemolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
