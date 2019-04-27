import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAllProjComponent } from './list-all-proj.component';

describe('ListAllProjComponent', () => {
  let component: ListAllProjComponent;
  let fixture: ComponentFixture<ListAllProjComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListAllProjComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAllProjComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
