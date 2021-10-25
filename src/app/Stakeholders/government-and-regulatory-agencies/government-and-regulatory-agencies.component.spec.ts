import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentAndRegulatoryAgenciesComponent } from './government-and-regulatory-agencies.component';

describe('GovernmentAndRegulatoryAgenciesComponent', () => {
  let component: GovernmentAndRegulatoryAgenciesComponent;
  let fixture: ComponentFixture<GovernmentAndRegulatoryAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentAndRegulatoryAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentAndRegulatoryAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
