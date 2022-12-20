import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroundServicesPersonelsPageComponent } from './ground-services-personels-page.component';

describe('GroundServicesPersonelsPageComponent', () => {
  let component: GroundServicesPersonelsPageComponent;
  let fixture: ComponentFixture<GroundServicesPersonelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroundServicesPersonelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GroundServicesPersonelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
