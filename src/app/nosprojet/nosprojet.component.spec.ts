import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NosprojetComponent } from './nosprojet.component';

describe('NosprojetComponent', () => {
  let component: NosprojetComponent;
  let fixture: ComponentFixture<NosprojetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NosprojetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NosprojetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
