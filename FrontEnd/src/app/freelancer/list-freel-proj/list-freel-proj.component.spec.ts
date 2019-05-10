import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListFreelProjComponent } from './list-freel-proj.component';

describe('ListFreelProjComponent', () => {
  let component: ListFreelProjComponent;
  let fixture: ComponentFixture<ListFreelProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListFreelProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListFreelProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
