import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../model/user';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  /**
   * FELADAT!
   * Hozd létre az alábbi Input tulajdonságot.
   * @var phraseString {string} - Input tulajdonság.
   */
  @Input() phraseStringa: string = '';
  @Input() usersa: User[] = [];

  @Output() delUser: EventEmitter<User> = new EventEmitter();
  currentUser: User = new User();
  order: number = 1;

  /**
   * FELADAT!
   * Hozd létre az alábbi változót.
   * @var columnKey {string} - a rendezés oszlopának kulcsa.
   */
  columnKey: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  changeOrder(): void {
    console.log(this.order)
    this.order = -this.order;
  }

  onSelectUser(user: User): void {
    this.currentUser = user;
  }

  onDeleteUser(user: User): void {
    this.delUser.emit(user);
    this.currentUser = new User();
  }

  /**
   * FELADAT!
   * Az oszlop feljécekre való kattintás kezelése.
   * Hozz létre egy metódust!
   * Neve: onColumnSelect
   * Működése: az osztály columnKey változóját állítsa be a
   *  kapott kulcsra.
   * @param key {string} - a kapott kulcs.
   * @returns {void}
   */
  onColumnSelect(key: string): void {
    this.columnKey = key;
    this.changeOrder();
  }
}
