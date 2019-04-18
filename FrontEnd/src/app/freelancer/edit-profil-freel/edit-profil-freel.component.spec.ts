import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProfilFreelComponent } from './edit-profil-freel.component';

describe('EditProfilFreelComponent', () => {
  let component: EditProfilFreelComponent;
  let fixture: ComponentFixture<EditProfilFreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProfilFreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProfilFreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
