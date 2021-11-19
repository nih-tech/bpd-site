import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QASIComponent } from './qasi.component';

describe('QASIComponent', () => {
  let component: QASIComponent;
  let fixture: ComponentFixture<QASIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QASIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QASIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
