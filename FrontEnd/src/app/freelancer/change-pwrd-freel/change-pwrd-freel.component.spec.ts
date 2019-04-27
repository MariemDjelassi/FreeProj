import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangePwrdFreelComponent } from './change-pwrd-freel.component';

describe('ChangePwrdFreelComponent', () => {
  let component: ChangePwrdFreelComponent;
  let fixture: ComponentFixture<ChangePwrdFreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangePwrdFreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangePwrdFreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
