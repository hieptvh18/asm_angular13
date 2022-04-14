import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadAdminComponent } from './head-admin.component';

describe('HeadAdminComponent', () => {
  let component: HeadAdminComponent;
  let fixture: ComponentFixture<HeadAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
