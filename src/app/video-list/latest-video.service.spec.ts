/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LatestVideoService } from './latest-video.service';

describe('LatestVideoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LatestVideoService]
    });
  });

  it('should ...', inject([LatestVideoService], (service: LatestVideoService) => {
    expect(service).toBeTruthy();
  }));
});
