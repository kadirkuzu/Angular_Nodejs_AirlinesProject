import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabinPersonelsPageComponent } from './cabin-personels-page.component';

describe('CabinPersonelsPageComponent', () => {
  let component: CabinPersonelsPageComponent;
  let fixture: ComponentFixture<CabinPersonelsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabinPersonelsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CabinPersonelsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
