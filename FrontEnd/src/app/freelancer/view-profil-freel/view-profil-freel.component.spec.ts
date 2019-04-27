import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfilFreelComponent } from './view-profil-freel.component';

describe('ViewProfilFreelComponent', () => {
  let component: ViewProfilFreelComponent;
  let fixture: ComponentFixture<ViewProfilFreelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewProfilFreelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewProfilFreelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
