import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitecontactComponent } from './lsitecontact.component';

describe('LsitecontactComponent', () => {
  let component: LsitecontactComponent;
  let fixture: ComponentFixture<LsitecontactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitecontactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsitecontactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
