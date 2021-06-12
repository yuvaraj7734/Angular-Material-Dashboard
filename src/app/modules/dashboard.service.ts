import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor() { }

  bigChart() {
    return [{
      name: 'Tamil',
      data: [502, 635, 809, 947, 1402, 3634, 5268]
    }, {
      name: 'Telugu',
      data: [106, 107, 111, 133, 221, 767, 1766]
    }, {
      name: 'Kerala',
      data: [163, 203, 276, 408, 547, 729, 628]
    }, {
      name: 'Orissa',
      data: [18, 31, 54, 156, 339, 818, 1201]
    }, {
      name: 'Goa',
      data: [2, 2, 2, 6, 13, 30, 46]
    }];
  }

  cards() {
    return [71, 78, 39, 66];
  }

  pieChart() {
    return [{
      name: 'Chrome',
      y: 61.41,
      sliced: true,
      selected: true
    }, {
      name: 'Internet Explorer',
      y: 10
    }, {
      name: 'Firefox',
      y: 10
    }, {
      name: 'Edge',
      y: 4
    }, {
      name: 'Safari',
      y: 9
    }, {
      name: 'Sogou Explorer',
      y: 9
    }, {
      name: 'Opera',
      y: 7
    }, {
      name: 'QQ',
      y: 1.2
    }, {
      name: 'Other',
      y: 2.61
    }];
  }
}
