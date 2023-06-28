/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DetailsActiviteService } from './DetailsActivite.service';

describe('Service: DetailsActivite', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DetailsActiviteService]
    });
  });

  it('should ...', inject([DetailsActiviteService], (service: DetailsActiviteService) => {
    expect(service).toBeTruthy();
  }));
});
