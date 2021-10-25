import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticlesAboutCTUComponent } from './articles-about-ctu.component';

describe('ArticlesAboutCTUComponent', () => {
  let component: ArticlesAboutCTUComponent;
  let fixture: ComponentFixture<ArticlesAboutCTUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticlesAboutCTUComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticlesAboutCTUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
