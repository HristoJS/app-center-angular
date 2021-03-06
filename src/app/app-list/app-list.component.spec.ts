import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppListComponentComponent } from './app-list.component';

describe('AppListComponentComponent', () => {
  let component: AppListComponentComponent;
  let fixture: ComponentFixture<AppListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
