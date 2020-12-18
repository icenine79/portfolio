import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseWeatherComponent } from './base-weather.component';

describe('BaseWeatherComponent', () => {
  let component: BaseWeatherComponent;
  let fixture: ComponentFixture<BaseWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
