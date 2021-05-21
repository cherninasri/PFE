import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LsitereclamationComponent } from './lsitereclamation.component';

describe('LsitereclamationComponent', () => {
  let component: LsitereclamationComponent;
  let fixture: ComponentFixture<LsitereclamationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LsitereclamationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LsitereclamationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
