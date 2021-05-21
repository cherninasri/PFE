import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommancemanComponent } from './commanceman.component';

describe('CommancemanComponent', () => {
  let component: CommancemanComponent;
  let fixture: ComponentFixture<CommancemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommancemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommancemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
