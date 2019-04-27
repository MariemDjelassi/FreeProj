import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilCompComponent } from './view-profil-comp.component';

describe('ViewProfilCompComponent', () => {
  let component: ViewProfilCompComponent;
  let fixture: ComponentFixture<ViewProfilCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfilCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
