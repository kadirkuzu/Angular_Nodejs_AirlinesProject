import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinCrewsPageComponent } from './cabin-crews-page.component';

describe('CabinCrewsPageComponent', () => {
  let component: CabinCrewsPageComponent;
  let fixture: ComponentFixture<CabinCrewsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinCrewsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinCrewsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
