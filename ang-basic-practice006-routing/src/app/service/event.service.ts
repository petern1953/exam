import { Injectable } from '@angular/core';
import { Event } from '../event';
import { Location } from '../location';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  private list: Event[] = [
    {
      name: 'Kecskeméti napok',
      date: '2021.03.15',
      time: '16.30',
      location: {
        address: 'Kiss u. 1',
        city: 'Kecskemét',
        country: 'Hungary',
      },
    },
    {
      name: 'Fűzfői napok',
      date: '2021.03.18',
      time: '16.30',
      location: {
        address: 'Fő u. 1',
        city: 'Kecskemét',
        country: 'Hungary',
      },
    },
    {
      name: 'Gyergyói napok',
      date: '2021.03.16',
      time: '16.30',
      location: {
        address: 'Kossuth u. 1',
        city: 'Gyergyó',
        country: 'Hungary',
      },
    },
  ];

  constructor() {}

  list$: BehaviorSubject<Event[]> = new BehaviorSubject<Event[]>([]);

  getAll(): BehaviorSubject<Event[]> {
    this.list$.next(this.list);
    return this.list$;
  }
}
