import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectiveAndGoalsComponent } from './objective-and-goals.component';

describe('ObjectiveAndGoalsComponent', () => {
  let component: ObjectiveAndGoalsComponent;
  let fixture: ComponentFixture<ObjectiveAndGoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectiveAndGoalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectiveAndGoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
