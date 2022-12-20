import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesCrewsPageComponent } from './ground-services-crews-page.component';

describe('GroundServicesCrewsPageComponent', () => {
  let component: GroundServicesCrewsPageComponent;
  let fixture: ComponentFixture<GroundServicesCrewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundServicesCrewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundServicesCrewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
