import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MantimagComponent } from './mantimag.component';

describe('MantimagComponent', () => {
  let component: MantimagComponent;
  let fixture: ComponentFixture<MantimagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MantimagComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MantimagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
