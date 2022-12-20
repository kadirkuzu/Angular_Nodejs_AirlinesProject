import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinCrewPersonelsPageComponent } from './cabin-crew-personels-page.component';

describe('CabinCrewPersonelsPageComponent', () => {
  let component: CabinCrewPersonelsPageComponent;
  let fixture: ComponentFixture<CabinCrewPersonelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinCrewPersonelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinCrewPersonelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
