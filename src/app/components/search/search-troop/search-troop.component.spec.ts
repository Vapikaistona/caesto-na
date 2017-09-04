import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchTroopComponent } from './search-troop.component';

describe('SearchTroopComponent', () => {
  let component: SearchTroopComponent;
  let fixture: ComponentFixture<SearchTroopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchTroopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchTroopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
