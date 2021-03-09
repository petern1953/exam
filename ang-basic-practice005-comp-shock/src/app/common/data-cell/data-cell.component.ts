import { Component, Input, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-data-cell',
  templateUrl: './data-cell.component.html',
  styleUrls: ['./data-cell.component.scss']
})
export class DataCellComponent implements OnInit {
  @Input() data: User = new User();
  @Input() key: string = '';

  // @Input() set price(value: number) {
  //   this.localPrice = value * 2;
  // }
  // localPrice: number = 0;

  constructor() { }

  ngOnInit(): void {
  }

}
