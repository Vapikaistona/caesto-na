import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GameGlobalChatComponent } from './game-global-chat.component';

describe('GameGlobalChatComponent', () => {
  let component: GameGlobalChatComponent;
  let fixture: ComponentFixture<GameGlobalChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GameGlobalChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GameGlobalChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
