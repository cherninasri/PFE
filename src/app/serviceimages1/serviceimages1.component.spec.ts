import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Serviceimages1Component } from './serviceimages1.component';

describe('Serviceimages1Component', () => {
  let component: Serviceimages1Component;
  let fixture: ComponentFixture<Serviceimages1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Serviceimages1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Serviceimages1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
