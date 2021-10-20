import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleandPatientsComponent } from './peopleand-patients.component';

describe('PeopleandPatientsComponent', () => {
  let component: PeopleandPatientsComponent;
  let fixture: ComponentFixture<PeopleandPatientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleandPatientsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleandPatientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
