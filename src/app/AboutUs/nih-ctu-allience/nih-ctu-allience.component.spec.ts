import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NIHCTUAllienceComponent } from './nih-ctu-allience.component';

describe('NIHCTUAllienceComponent', () => {
  let component: NIHCTUAllienceComponent;
  let fixture: ComponentFixture<NIHCTUAllienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NIHCTUAllienceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NIHCTUAllienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
