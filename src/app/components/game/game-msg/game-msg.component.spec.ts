import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameMsgComponent } from './game-msg.component';

describe('GameMsgComponent', () => {
  let component: GameMsgComponent;
  let fixture: ComponentFixture<GameMsgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameMsgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameMsgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
