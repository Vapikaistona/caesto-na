import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCommanderComponent } from './search-commander.component';

describe('SearchCommanderComponent', () => {
  let component: SearchCommanderComponent;
  let fixture: ComponentFixture<SearchCommanderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchCommanderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchCommanderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
