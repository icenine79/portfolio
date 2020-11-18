import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BaseNasaComponent } from './base-nasa.component';

describe('BaseNasaComponent', () => {
  let component: BaseNasaComponent;
  let fixture: ComponentFixture<BaseNasaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BaseNasaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BaseNasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
