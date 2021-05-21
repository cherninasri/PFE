import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoiradminComponent } from './voiradmin.component';

describe('VoiradminComponent', () => {
  let component: VoiradminComponent;
  let fixture: ComponentFixture<VoiradminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VoiradminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VoiradminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
