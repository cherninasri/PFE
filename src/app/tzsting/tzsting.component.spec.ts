import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TzstingComponent } from './tzsting.component';

describe('TzstingComponent', () => {
  let component: TzstingComponent;
  let fixture: ComponentFixture<TzstingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TzstingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TzstingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
