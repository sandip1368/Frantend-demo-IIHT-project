import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchPNRComponent } from './search-pnr.component';

describe('SearchPNRComponent', () => {
  let component: SearchPNRComponent;
  let fixture: ComponentFixture<SearchPNRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchPNRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchPNRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
