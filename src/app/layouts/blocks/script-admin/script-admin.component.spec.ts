import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptAdminComponent } from './script-admin.component';

describe('ScriptAdminComponent', () => {
  let component: ScriptAdminComponent;
  let fixture: ComponentFixture<ScriptAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScriptAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
