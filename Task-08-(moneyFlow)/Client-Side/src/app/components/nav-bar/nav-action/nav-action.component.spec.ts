import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavActionComponent } from './nav-action.component';

describe('NavActionComponent', () => {
  let component: NavActionComponent;
  let fixture: ComponentFixture<NavActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavActionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
