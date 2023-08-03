import { TestBed } from '@angular/core/testing';

import { ReponseAppelService } from './reponse-appel.service';

describe('ReponseAppelService', () => {
  let service: ReponseAppelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReponseAppelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
