import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitecomaComponent } from './lsitecoma.component';

describe('LsitecomaComponent', () => {
  let component: LsitecomaComponent;
  let fixture: ComponentFixture<LsitecomaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitecomaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsitecomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
