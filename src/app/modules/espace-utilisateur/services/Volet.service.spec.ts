/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VoletService } from './Volet.service';

describe('Service: Volet', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VoletService]
    });
  });

  it('should ...', inject([VoletService], (service: VoletService) => {
    expect(service).toBeTruthy();
  }));
});
