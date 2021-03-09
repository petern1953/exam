import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.scss']
})
export class DataListComponent implements OnInit {
  @Input() dataList: User[] = [];
  @Output() selectClick(dataRow: User): EventEmitter<User>;
  @Output() updateClick(dataRow: User): EventEmitter<User>;
  @Output() deleteClick(dataRow: User): EventEmitter<User>;

  constructor() { }

  ngOnInit(): void {
  }

  onSelectClicked(dataRow: User): void {
    this.selectClick(dataRow);
  }

}
