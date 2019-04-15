import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterFreelancerComponent } from './register-freelancer.component';

describe('RegisterFreelancerComponent', () => {
  let component: RegisterFreelancerComponent;
  let fixture: ComponentFixture<RegisterFreelancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisterFreelancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterFreelancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
