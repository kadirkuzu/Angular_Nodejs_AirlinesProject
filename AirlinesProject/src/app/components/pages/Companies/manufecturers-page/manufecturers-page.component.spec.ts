import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManufecturersPageComponent } from './manufecturers-page.component';

describe('ManufecturersPageComponent', () => {
  let component: ManufecturersPageComponent;
  let fixture: ComponentFixture<ManufecturersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManufecturersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManufecturersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
