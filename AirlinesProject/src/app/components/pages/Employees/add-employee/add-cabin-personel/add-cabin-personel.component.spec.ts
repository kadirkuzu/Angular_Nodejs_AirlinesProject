import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCabinPersonelComponent } from './add-cabin-personel.component';

describe('AddCabinPersonelComponent', () => {
  let component: AddCabinPersonelComponent;
  let fixture: ComponentFixture<AddCabinPersonelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddCabinPersonelComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddCabinPersonelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
