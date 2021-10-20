import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CROCMOsComponent } from './crocmos.component';

describe('CROCMOsComponent', () => {
  let component: CROCMOsComponent;
  let fixture: ComponentFixture<CROCMOsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CROCMOsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CROCMOsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
