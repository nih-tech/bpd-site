import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchSitesInvestigatorsComponent } from './research-sites-investigators.component';

describe('ResearchSitesInvestigatorsComponent', () => {
  let component: ResearchSitesInvestigatorsComponent;
  let fixture: ComponentFixture<ResearchSitesInvestigatorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchSitesInvestigatorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchSitesInvestigatorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
