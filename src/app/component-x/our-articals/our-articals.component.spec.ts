import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurArticalsComponent } from './our-articals.component';

describe('OurArticalsComponent', () => {
  let component: OurArticalsComponent;
  let fixture: ComponentFixture<OurArticalsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurArticalsComponent]
    });
    fixture = TestBed.createComponent(OurArticalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
