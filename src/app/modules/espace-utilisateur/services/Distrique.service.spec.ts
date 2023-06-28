/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DistriqueService } from './Distrique.service';

describe('Service: Distrique', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DistriqueService]
    });
  });

  it('should ...', inject([DistriqueService], (service: DistriqueService) => {
    expect(service).toBeTruthy();
  }));
});
