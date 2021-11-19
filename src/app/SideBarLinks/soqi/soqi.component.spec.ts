import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SOQIComponent } from './soqi.component';

describe('SOQIComponent', () => {
  let component: SOQIComponent;
  let fixture: ComponentFixture<SOQIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SOQIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SOQIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
