import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadsUiComponent } from './uploads-ui.component';

describe('UploadsUiComponent', () => {
  let component: UploadsUiComponent;
  let fixture: ComponentFixture<UploadsUiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadsUiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadsUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
