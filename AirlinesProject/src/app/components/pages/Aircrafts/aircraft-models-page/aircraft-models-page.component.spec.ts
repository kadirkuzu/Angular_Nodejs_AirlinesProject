import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftModelsPageComponent } from './aircraft-models-page.component';

describe('AircraftModelsPageComponent', () => {
  let component: AircraftModelsPageComponent;
  let fixture: ComponentFixture<AircraftModelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftModelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftModelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
