import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroundServiceChiefComponent } from './add-ground-service-chief.component';

describe('AddGroundServiceChiefComponent', () => {
  let component: AddGroundServiceChiefComponent;
  let fixture: ComponentFixture<AddGroundServiceChiefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroundServiceChiefComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGroundServiceChiefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
