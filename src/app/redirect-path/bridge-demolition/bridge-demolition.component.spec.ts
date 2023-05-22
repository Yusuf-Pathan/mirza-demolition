import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BridgeDemolitionComponent } from './bridge-demolition.component';

describe('BridgeDemolitionComponent', () => {
  let component: BridgeDemolitionComponent;
  let fixture: ComponentFixture<BridgeDemolitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BridgeDemolitionComponent]
    });
    fixture = TestBed.createComponent(BridgeDemolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
