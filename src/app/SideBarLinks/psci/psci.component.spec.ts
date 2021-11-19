import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PSCIComponent } from './psci.component';

describe('PSCIComponent', () => {
  let component: PSCIComponent;
  let fixture: ComponentFixture<PSCIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PSCIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PSCIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
