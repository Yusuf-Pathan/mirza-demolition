import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MdButtonComponent } from './md-button.component';

describe('MdButtonComponent', () => {
  let component: MdButtonComponent;
  let fixture: ComponentFixture<MdButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MdButtonComponent]
    });
    fixture = TestBed.createComponent(MdButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
