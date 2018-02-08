import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WineListingComponent } from './wine-listing.component';

describe('WineListingComponent', () => {
  let component: WineListingComponent;
  let fixture: ComponentFixture<WineListingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WineListingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WineListingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
