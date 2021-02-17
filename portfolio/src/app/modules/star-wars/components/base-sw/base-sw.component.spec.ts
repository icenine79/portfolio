import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseSwComponent } from './base-sw.component';

describe('BaseSwComponent', () => {
  let component: BaseSwComponent;
  let fixture: ComponentFixture<BaseSwComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseSwComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseSwComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
