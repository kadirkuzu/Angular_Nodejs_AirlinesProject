import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAircraftModelComponent } from './add-aircraft-model.component';

describe('AddAircraftModelComponent', () => {
  let component: AddAircraftModelComponent;
  let fixture: ComponentFixture<AddAircraftModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddAircraftModelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddAircraftModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
