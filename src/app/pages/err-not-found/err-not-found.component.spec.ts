import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrNotFoundComponent } from './err-not-found.component';

describe('ErrNotFoundComponent', () => {
  let component: ErrNotFoundComponent;
  let fixture: ComponentFixture<ErrNotFoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrNotFoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
