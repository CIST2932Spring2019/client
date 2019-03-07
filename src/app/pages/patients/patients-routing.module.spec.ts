import { PatientsRoutingModule } from './patients-routing.module';

describe('PatientsRoutingModule', () => {
  let patientsRoutingModule: PatientsRoutingModule;

  beforeEach(() => {
    patientsRoutingModule = new PatientsRoutingModule();
  });

  it('should create an instance', () => {
    expect(patientsRoutingModule).toBeTruthy();
  });
});
