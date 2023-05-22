import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpComingProjectsComponent } from './up-coming-projects.component';

describe('UpComingProjectsComponent', () => {
  let component: UpComingProjectsComponent;
  let fixture: ComponentFixture<UpComingProjectsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UpComingProjectsComponent]
    });
    fixture = TestBed.createComponent(UpComingProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
