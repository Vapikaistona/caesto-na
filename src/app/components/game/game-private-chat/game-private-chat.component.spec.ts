import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GamePrivateChatComponent } from './game-private-chat.component';

describe('GamePrivateChatComponent', () => {
  let component: GamePrivateChatComponent;
  let fixture: ComponentFixture<GamePrivateChatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GamePrivateChatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GamePrivateChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
