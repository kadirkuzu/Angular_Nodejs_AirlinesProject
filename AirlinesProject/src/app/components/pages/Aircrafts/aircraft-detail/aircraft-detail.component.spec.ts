import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftDetailComponent } from './aircraft-detail.component';

describe('AircraftDetailComponent', () => {
  let component: AircraftDetailComponent;
  let fixture: ComponentFixture<AircraftDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
