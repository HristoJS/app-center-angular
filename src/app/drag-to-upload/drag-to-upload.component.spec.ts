import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragToUploadComponent } from './drag-to-upload.component';

describe('DragToUploadComponent', () => {
  let component: DragToUploadComponent;
  let fixture: ComponentFixture<DragToUploadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragToUploadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragToUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
