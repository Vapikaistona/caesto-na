import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameUsersComponent } from './game-users.component';

describe('GameUsersComponent', () => {
  let component: GameUsersComponent;
  let fixture: ComponentFixture<GameUsersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameUsersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
