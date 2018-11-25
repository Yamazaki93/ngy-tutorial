import { TestBed, inject } from '@angular/core/testing';

import { NgyTutorialService } from './ngy-tutorial.service';

describe('NgyTutorialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgyTutorialService]
    });
  });

  it('should be created', inject([NgyTutorialService], (service: NgyTutorialService) => {
    expect(service).toBeTruthy();
  }));
});
