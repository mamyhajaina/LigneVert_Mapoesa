/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AppelService } from './Appel.service';

describe('Service: Appel', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppelService]
    });
  });

  it('should ...', inject([AppelService], (service: AppelService) => {
    expect(service).toBeTruthy();
  }));
});
