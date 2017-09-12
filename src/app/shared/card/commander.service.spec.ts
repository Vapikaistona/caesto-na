import { TestBed, inject } from '@angular/core/testing';

import { CommanderService } from './commander.service';

describe('CommanderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CommanderService]
    });
  });

  it('should be created', inject([CommanderService], (service: CommanderService) => {
    expect(service).toBeTruthy();
  }));
});
