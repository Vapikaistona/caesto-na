import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderListComponent } from './commander-list.component';

describe('CommanderListComponent', () => {
  let component: CommanderListComponent;
  let fixture: ComponentFixture<CommanderListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
