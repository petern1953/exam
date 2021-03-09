import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import * as EventEmitter from 'events';


@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.scss']
})
export class ActionButtonComponent implements OnInit {
  @Input() icon: string = 'fa-pen';
  @Input() btnClass: string = '';
  @Input() text: string = '';
  // @Input() btnClass: string = 'btn-danger';
  // @Input() text: string = 'Kakukk';

  @Output() clicked: EventEmitter<boolean> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onUserClicked(): void {
    this.clicked.emit(true);
  }

}
