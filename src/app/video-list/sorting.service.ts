import { Injectable } from '@angular/core';

@Injectable()
export class SortingService {

  constructor() { }
  ascending(a:any, b:any) {
    if (a.name>b.name) return 1;
    if (a.name<b.name) return -1;
    return 0;
  }

  descending(a:any, b:any) {
    if (a.name>b.name) return -1;
    if (a.name<b.name) return 1;
    return 0;
  }
}
