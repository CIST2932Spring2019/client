import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PharmacistOverviewComponent } from './pharmacist-overview.component';

describe('PharmacistOverviewComponent', () => {
  let component: PharmacistOverviewComponent;
  let fixture: ComponentFixture<PharmacistOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PharmacistOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PharmacistOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
