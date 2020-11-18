import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseMoviesComponent } from './base-movies.component';

describe('BaseMoviesComponent', () => {
  let component: BaseMoviesComponent;
  let fixture: ComponentFixture<BaseMoviesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseMoviesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
