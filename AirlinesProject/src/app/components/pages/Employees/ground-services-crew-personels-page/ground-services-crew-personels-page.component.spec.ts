import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesCrewPersonelsPageComponent } from './ground-services-crew-personels-page.component';

describe('GroundServicesCrewPersonelsPageComponent', () => {
  let component: GroundServicesCrewPersonelsPageComponent;
  let fixture: ComponentFixture<GroundServicesCrewPersonelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundServicesCrewPersonelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundServicesCrewPersonelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
