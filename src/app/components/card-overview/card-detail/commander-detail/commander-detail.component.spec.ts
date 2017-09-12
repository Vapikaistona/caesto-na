import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommanderDetailComponent } from './commander-detail.component';

describe('CommanderDetailComponent', () => {
  let component: CommanderDetailComponent;
  let fixture: ComponentFixture<CommanderDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommanderDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommanderDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
