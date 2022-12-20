import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesChiefsPageComponent } from './ground-services-chiefs-page.component';

describe('GroundServicesChiefsPageComponent', () => {
  let component: GroundServicesChiefsPageComponent;
  let fixture: ComponentFixture<GroundServicesChiefsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundServicesChiefsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundServicesChiefsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
