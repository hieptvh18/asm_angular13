import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnStatusComponent } from './btn-status.component';

describe('BtnStatusComponent', () => {
  let component: BtnStatusComponent;
  let fixture: ComponentFixture<BtnStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BtnStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
