import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseCalculatorComponent } from './base-calculator.component';

describe('BaseCalculatorComponent', () => {
  let component: BaseCalculatorComponent;
  let fixture: ComponentFixture<BaseCalculatorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseCalculatorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
