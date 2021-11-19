import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GERIComponent } from './geri.component';

describe('GERIComponent', () => {
  let component: GERIComponent;
  let fixture: ComponentFixture<GERIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GERIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GERIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
