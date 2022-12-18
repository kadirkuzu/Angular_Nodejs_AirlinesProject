import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportManagementsPageComponent } from './airport-managements-page.component';

describe('AirportManagementsPageComponent', () => {
  let component: AirportManagementsPageComponent;
  let fixture: ComponentFixture<AirportManagementsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportManagementsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AirportManagementsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
