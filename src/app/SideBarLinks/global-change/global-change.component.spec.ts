import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalChangeComponent } from './global-change.component';

describe('GlobalChangeComponent', () => {
  let component: GlobalChangeComponent;
  let fixture: ComponentFixture<GlobalChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GlobalChangeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
