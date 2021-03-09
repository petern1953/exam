import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  activatedRoute: any;
  eventService: any;
  event: Event = new Event();

  constructor(
    eventservice: EventService = new EventService(),
    activatedRoute: ActivatedRoute = new ActivatedRoute()
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: { id: any }) =>
      this.eventService.get(params.id).subscribe((event: Event) => {
        console.log(event);
        this.event = event || new Event();
      })
    );
  }

  onFormSubmit(form: NgForm): void {
    console.log(form.value);
    this.activatedRoute.params.subscribe((params: { id: any }) =>
      this.eventService.post(params.id).subscribe((event: Event) => {
        console.log(event);
        this.event = event || new Event();
      })
    );
  }
}
