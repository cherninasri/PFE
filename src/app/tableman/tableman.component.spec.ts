import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablemanComponent } from './tableman.component';

describe('TablemanComponent', () => {
  let component: TablemanComponent;
  let fixture: ComponentFixture<TablemanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablemanComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablemanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
