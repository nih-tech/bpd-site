import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestorsIncludingTaxPyaersComponent } from './investors-including-tax-pyaers.component';

describe('InvestorsIncludingTaxPyaersComponent', () => {
  let component: InvestorsIncludingTaxPyaersComponent;
  let fixture: ComponentFixture<InvestorsIncludingTaxPyaersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestorsIncludingTaxPyaersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestorsIncludingTaxPyaersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
