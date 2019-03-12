import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientLabComponent } from './create-patient-lab.component';

describe('CreatePatientLabComponent', () => {
  let component: CreatePatientLabComponent;
  let fixture: ComponentFixture<CreatePatientLabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatePatientLabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientLabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
