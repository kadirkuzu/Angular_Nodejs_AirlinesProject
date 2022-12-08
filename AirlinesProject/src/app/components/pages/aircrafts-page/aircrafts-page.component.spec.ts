import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AircraftsPageComponent } from './aircrafts-page.component';

describe('AircraftsPageComponent', () => {
  let component: AircraftsPageComponent;
  let fixture: ComponentFixture<AircraftsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AircraftsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AircraftsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
