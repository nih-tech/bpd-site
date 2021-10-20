import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GovernmentanRegulatoryAgenciesComponent } from './governmentan-regulatory-agencies.component';

describe('GovernmentanRegulatoryAgenciesComponent', () => {
  let component: GovernmentanRegulatoryAgenciesComponent;
  let fixture: ComponentFixture<GovernmentanRegulatoryAgenciesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GovernmentanRegulatoryAgenciesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GovernmentanRegulatoryAgenciesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
