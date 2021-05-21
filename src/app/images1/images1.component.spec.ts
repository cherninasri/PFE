import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Images1Component } from './images1.component';

describe('Images1Component', () => {
  let component: Images1Component;
  let fixture: ComponentFixture<Images1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Images1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Images1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
