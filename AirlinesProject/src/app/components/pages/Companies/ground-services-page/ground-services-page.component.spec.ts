import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesPageComponent } from './ground-services-page.component';

describe('GroundServicesPageComponent', () => {
  let component: GroundServicesPageComponent;
  let fixture: ComponentFixture<GroundServicesPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundServicesPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundServicesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
