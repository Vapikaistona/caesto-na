import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TroopListComponent } from './troop-list.component';

describe('TroopListComponent', () => {
  let component: TroopListComponent;
  let fixture: ComponentFixture<TroopListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TroopListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TroopListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
