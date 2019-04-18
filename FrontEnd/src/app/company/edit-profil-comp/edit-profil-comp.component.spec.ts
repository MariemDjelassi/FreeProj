import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilCompComponent } from './edit-profil-comp.component';

describe('EditProfilCompComponent', () => {
  let component: EditProfilCompComponent;
  let fixture: ComponentFixture<EditProfilCompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilCompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
