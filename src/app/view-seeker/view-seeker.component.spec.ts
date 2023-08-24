import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewSeekerComponent } from './view-seeker.component';

describe('ViewSeekerComponent', () => {
  let component: ViewSeekerComponent;
  let fixture: ComponentFixture<ViewSeekerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ViewSeekerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewSeekerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
