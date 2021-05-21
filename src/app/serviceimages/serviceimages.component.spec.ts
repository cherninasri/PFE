import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceimagesComponent } from './serviceimages.component';

describe('ServiceimagesComponent', () => {
  let component: ServiceimagesComponent;
  let fixture: ComponentFixture<ServiceimagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceimagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceimagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
