import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddGroundServicePersonelComponent } from './add-ground-service-personel.component';

describe('AddGroundServicePersonelComponent', () => {
  let component: AddGroundServicePersonelComponent;
  let fixture: ComponentFixture<AddGroundServicePersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddGroundServicePersonelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddGroundServicePersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
