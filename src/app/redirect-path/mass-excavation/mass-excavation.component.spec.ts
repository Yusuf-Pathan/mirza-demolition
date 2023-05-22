import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MassExcavationComponent } from './mass-excavation.component';

describe('MassExcavationComponent', () => {
  let component: MassExcavationComponent;
  let fixture: ComponentFixture<MassExcavationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MassExcavationComponent]
    });
    fixture = TestBed.createComponent(MassExcavationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
