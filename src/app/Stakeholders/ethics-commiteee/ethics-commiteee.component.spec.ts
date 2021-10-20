import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EthicsCommiteeeComponent } from './ethics-commiteee.component';

describe('EthicsCommiteeeComponent', () => {
  let component: EthicsCommiteeeComponent;
  let fixture: ComponentFixture<EthicsCommiteeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EthicsCommiteeeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EthicsCommiteeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
