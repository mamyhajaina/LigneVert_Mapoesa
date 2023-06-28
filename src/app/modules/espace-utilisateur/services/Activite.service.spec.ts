/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ActiviteService } from './Activite.service';

describe('Service: Activite', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ActiviteService]
    });
  });

  it('should ...', inject([ActiviteService], (service: ActiviteService) => {
    expect(service).toBeTruthy();
  }));
});
