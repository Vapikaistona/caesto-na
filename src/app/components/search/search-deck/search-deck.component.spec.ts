import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDeckComponent } from './search-deck.component';

describe('SearchDeckComponent', () => {
  let component: SearchDeckComponent;
  let fixture: ComponentFixture<SearchDeckComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDeckComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDeckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
