import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mantimag1Component } from './mantimag1.component';

describe('Mantimag1Component', () => {
  let component: Mantimag1Component;
  let fixture: ComponentFixture<Mantimag1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Mantimag1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Mantimag1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
