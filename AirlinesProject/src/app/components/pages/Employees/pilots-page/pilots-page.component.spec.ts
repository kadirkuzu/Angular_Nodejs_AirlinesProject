import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PilotsPageComponent } from './pilots-page.component';

describe('PilotsPageComponent', () => {
  let component: PilotsPageComponent;
  let fixture: ComponentFixture<PilotsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PilotsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PilotsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
