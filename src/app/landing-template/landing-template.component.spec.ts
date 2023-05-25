import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingTemplateComponent } from './landing-template.component';

describe('LandingTemplateComponent', () => {
  let component: LandingTemplateComponent;
  let fixture: ComponentFixture<LandingTemplateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LandingTemplateComponent]
    });
    fixture = TestBed.createComponent(LandingTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
