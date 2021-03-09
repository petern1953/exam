import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-row',
  templateUrl: './data-row.component.html',
  styleUrls: ['./data-row.component.scss']
})
export class DataRowComponent implements OnInit {
  @Input() dataRow: User = new User;

  @Output() selectClick: EventEmitter<User> = new EventEmitter();
  @Output() updateClick: EventEmitter<User> = new EventEmitter();
  @Output() deleteClick: EventEmitter<User> = new EventEmitter();

  // id = this.dataRow.id;
  // name = this.dataRow.name;
  // email = this.dataRow.email;
  // address = this.dataRow.address;
  // active = this.dataRow.active;

  constructor() { }

  onSelectClicked(dataRow: User): void {
    this.selectClick.emit(dataRow);
    // console.log("selectClicked", this.dataRow);
    console.log("selectClicked", dataRow);
  }

  onUpdateClicked(dataRow: User): void {
    this.updateClick.emit(dataRow);
    // console.log("updateClicked", this.dataRow);
    console.log("updateClicked", dataRow);
  }

  onDeleteClicked(dataRow: User): void {
    this.deleteClick.emit(dataRow);
    // console.log("deleteClicked", this.dataRow);
    console.log("deleteClicked", dataRow);
  }

  ngOnInit(): void {
  }

}
