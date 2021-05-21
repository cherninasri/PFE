import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Later1Component } from './later1.component';

describe('Later1Component', () => {
  let component: Later1Component;
  let fixture: ComponentFixture<Later1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Later1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Later1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
