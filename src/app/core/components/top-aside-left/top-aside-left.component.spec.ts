import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopAsideLeftComponent } from './top-aside-left.component';

describe('TopAsideLeftComponent', () => {
  let component: TopAsideLeftComponent;
  let fixture: ComponentFixture<TopAsideLeftComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopAsideLeftComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopAsideLeftComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
