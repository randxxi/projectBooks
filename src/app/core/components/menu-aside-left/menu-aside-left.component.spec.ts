import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuAsideLeftComponent } from './menu-aside-left.component';

describe('MenuAsideLeftComponent', () => {
  let component: MenuAsideLeftComponent;
  let fixture: ComponentFixture<MenuAsideLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAsideLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuAsideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
