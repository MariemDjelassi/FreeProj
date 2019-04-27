import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwrdCompComponent } from './change-pwrd-comp.component';

describe('ChangePwrdCompComponent', () => {
  let component: ChangePwrdCompComponent;
  let fixture: ComponentFixture<ChangePwrdCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwrdCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwrdCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
