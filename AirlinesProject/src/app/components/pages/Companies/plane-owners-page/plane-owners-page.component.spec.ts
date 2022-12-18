import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaneOwnersPageComponent } from './plane-owners-page.component';

describe('PlaneOwnersPageComponent', () => {
  let component: PlaneOwnersPageComponent;
  let fixture: ComponentFixture<PlaneOwnersPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlaneOwnersPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaneOwnersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
