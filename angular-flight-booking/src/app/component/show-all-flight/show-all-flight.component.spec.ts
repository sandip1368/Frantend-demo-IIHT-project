import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAllFlightComponent } from './show-all-flight.component';

describe('ShowAllFlightComponent', () => {
  let component: ShowAllFlightComponent;
  let fixture: ComponentFixture<ShowAllFlightComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShowAllFlightComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowAllFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
