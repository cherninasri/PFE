import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitecomantenanComponent } from './lsitecomantenan.component';

describe('LsitecomantenanComponent', () => {
  let component: LsitecomantenanComponent;
  let fixture: ComponentFixture<LsitecomantenanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitecomantenanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsitecomantenanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
