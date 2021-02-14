import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseBooksComponent } from './base-books.component';

describe('BaseBooksComponent', () => {
  let component: BaseBooksComponent;
  let fixture: ComponentFixture<BaseBooksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseBooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
