import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterYourSiteFormComponent } from './register-your-site-form.component';

describe('RegisterYourSiteFormComponent', () => {
  let component: RegisterYourSiteFormComponent;
  let fixture: ComponentFixture<RegisterYourSiteFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterYourSiteFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterYourSiteFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
