import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteAcrediationComponent } from './site-acrediation.component';

describe('SiteAcrediationComponent', () => {
  let component: SiteAcrediationComponent;
  let fixture: ComponentFixture<SiteAcrediationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteAcrediationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteAcrediationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
