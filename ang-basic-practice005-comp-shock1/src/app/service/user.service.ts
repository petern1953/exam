import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private dataList: User[] = [
    // {
    //   id: 1,
    //   name: 'Tades Casterot',
    //   email: 'tcasterot0@sakura.ne.jp',
    //   address: '41 Heffernan Avenue',
    //   active: false,
    // },
    // {
    //   id: 2,
    //   name: 'Carmela Sandland',
    //   email: 'csandland1@t.co',
    //   address: '5 Brown Terrace',
    //   active: false,
    // },
    // {
    //   id: 3,
    //   name: 'Annnora Beebis',
    //   email: 'abeebis2@discuz.net',
    //   address: '73 Hintze Center',
    //   active: false,
    // },
    // {
    //   id: 4,
    //   name: 'Dominique Bolf',
    //   email: 'dbolf3@canalblog.com',
    //   address: '99387 Judy Crossing',
    //   active: true,
    // },
    // {
    //   id: 5,
    //   name: 'Dorothy Weald',
    //   email: 'dweald4@shareasale.com',
    //   address: '1 Waubesa Center',
    //   active: true,
    // },
    // {
    //   id: 6,
    //   name: 'Rory Goodhay',
    //   email: 'rgoodhay5@cornell.edu',
    //   address: '20399 Kim Court',
    //   active: false,
    // },
    // {
    //   id: 7,
    //   name: 'Amalle Caneo',
    //   email: 'acaneo6@instagram.com',
    //   address: '24438 Crownhardt Place',
    //   active: true,
    // },
    // {
    //   id: 8,
    //   name: 'Fee Castaner',
    //   email: 'fcastaner7@usgs.gov',
    //   address: '5684 Golf Course Junction',
    //   active: true,
    // },
    // {
    //   id: 9,
    //   name: 'Kattie Ilymanov',
    //   email: 'kilymanov8@admin.ch',
    //   address: '4 Menomonie Circle',
    //   active: true,
    // },
    // {
    //   id: 10,
    //   name: 'Kynthia Murrison',
    //   email: 'kmurrison9@people.com.cn',
    //   address: '4625 Comanche Hill',
    //   active: false,
    // },
    // {
    //   id: 11,
    //   name: 'Miltie Munkton',
    //   email: 'mmunktona@bandcamp.com',
    //   address: '318 Village Way',
    //   active: false,
    // },
    // {
    //   id: 12,
    //   name: 'Kerrill Paff',
    //   email: 'kpaffb@umn.edu',
    //   address: '1 7th Drive',
    //   active: true,
    // },
    // {
    //   id: 13,
    //   name: 'Anatollo Barkworth',
    //   email: 'abarkworthc@hostgator.com',
    //   address: '7624 Pond Hill',
    //   active: false,
    // },
    // {
    //   id: 14,
    //   name: 'Windham McAuley',
    //   email: 'wmcauleyd@mapy.cz',
    //   address: '09139 Shasta Hill',
    //   active: false,
    // },
    // {
    //   id: 15,
    //   name: 'Lauren Grinnikov',
    //   email: 'lgrinnikove@ycombinator.com',
    //   address: '6657 Hooker Avenue',
    //   active: true,
    // },
    // {
    //   id: 16,
    //   name: 'Kaleb Bugg',
    //   email: 'kbuggf@sourceforge.net',
    //   address: '81726 Westport Park',
    //   active: false,
    // },
    // {
    //   id: 17,
    //   name: 'Christel Biles',
    //   email: 'cbilesg@wp.com',
    //   address: '6 Oak Valley Center',
    //   active: true,
    // },
    // {
    //   id: 18,
    //   name: 'Elka Keighly',
    //   email: 'ekeighlyh@facebook.com',
    //   address: '280 New Castle Pass',
    //   active: false,
    // },
    // {
    //   id: 19,
    //   name: 'Lesley Blackburne',
    //   email: 'lblackburnei@google.co.jp',
    //   address: '0457 Walton Circle',
    //   active: false,
    // },
    // {
    //   id: 20,
    //   name: 'Torie Cumesky',
    //   email: 'tcumeskyj@flavors.me',
    //   address: '46266 Goodland Parkway',
    //   active: false,
    // },
    // {
    //   id: 21,
    //   name: 'Dona Desseine',
    //   email: 'ddesseinek@biglobe.ne.jp',
    //   address: '689 Maple Wood Circle',
    //   active: true,
    // },
    // {
    //   id: 22,
    //   name: 'Odette Shooter',
    //   email: 'oshooterl@webs.com',
    //   address: '74 Kedzie Point',
    //   active: false,
    // },
    // {
    //   id: 23,
    //   name: 'Donnajean Elsom',
    //   email: 'delsomm@flavors.me',
    //   address: '3 South Plaza',
    //   active: true,
    // },
    // {
    //   id: 24,
    //   name: 'Alverta Nazaret',
    //   email: 'anazaretn@ft.com',
    //   address: '136 Carioca Place',
    //   active: true,
    // },
    // {
    //   id: 25,
    //   name: 'Steward Langstone',
    //   email: 'slangstoneo@home.pl',
    //   address: '815 Erie Plaza',
    //   active: true,
    // },
  ];

  userSubject: Subject<User[]> = new Subject();
  // // get list(): User[] {
  // get list(): Subject<User[]> {
  //   // return this.dataList;
  //   return this.userSubject;
  // }
  get list(): Subject<User[]> {
    return this.userSubject;
  }

  // constructor(private http: HttpClient) {
  //   // if (localStorage.userDataList) {
  //   //   this.dataList = JSON.parse(localStorage.userDataList);
  //   // }
  //   this.getAll();
  // }
  // constructor(private userService: UserService) {
  // this.getAll();

  constructor(private http: HttpClient) {
    this.getAll();

    const o1: Observable<number> = new Observable((observer) => {
      setInterval(() => {
        observer.next(Math.floor(Math.random() * 20));
      }, 1000);

      setTimeout(() => observer.complete(), 10000);

      setTimeout(() => {
        // throw new Error('fail');
        observer.error('fail');
      }, 5000);
    });

    const subscription: Subscription = o1.subscribe(
      (num) => console.log(num),
      (err) => console.log(err),
      () => console.log('complete')
    );
  }

  // getAll0(): void {
  //   this.http.get<User[]>('http://localhost:3000/users').subscribe((users) => {
  //     // // this.dataList = users;
  //     this.userSubject.next(users);
  //   });
  // }
  getAll(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/users');
  }

  updateUser(user: User): void {
    // ezt majd módosítani kell
    // const index = this.list.findIndex((item) => item.id === user.id);
    // this.list.splice(index, 1, user);
    // this.updateLocalStorage();
  }

  removeUser(user: User): void {
    // ezt majd módosítani kell
    // const index = this.list.findIndex((item) => item.id === user.id);
    // this.list.splice(index, 1);
    // this.updateLocalStorage();
  }

  updateLocalStorage(): void {
    localStorage.userDataList = JSON.stringify(this.list);
  }
}
