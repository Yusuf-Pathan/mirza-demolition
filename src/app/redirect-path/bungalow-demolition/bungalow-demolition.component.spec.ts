import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BungalowDemolitionComponent } from './bungalow-demolition.component';

describe('BungalowDemolitionComponent', () => {
  let component: BungalowDemolitionComponent;
  let fixture: ComponentFixture<BungalowDemolitionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BungalowDemolitionComponent]
    });
    fixture = TestBed.createComponent(BungalowDemolitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
