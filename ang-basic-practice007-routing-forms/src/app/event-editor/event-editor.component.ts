import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../service/event.service';
import { Event } from '../model/event';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-event-editor',
  templateUrl: './event-editor.component.html',
  styleUrls: ['./event-editor.component.scss'],
})
export class EventEditorComponent implements OnInit {
  // activatedRoute: any;
  // eventService: any;
  event$: Observable<Event> = this.activatedRoute.params.pipe(
    switchMap((params) => this.eventservice.get(params.id))
  );

  constructor(
    private eventservice: EventService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.activatedRoute.params.subscribe((params: { id: any }) =>
    //   this.eventService.get(params.id).subscribe((event: Event) => {
    //     console.log(event);
    //     this.event = event || new Event();
    //   })
    // );
  }

  onUpdate(form: NgForm, event: Event): void {
    this.eventservice
      .update(event)
      .subscribe((ev) => this.router.navigate(['']));
  }

  onFormSubmit(form: NgForm): void {
    console.log(form.value);
    // this.activatedRoute.params.subscribe((params: { id: any }) =>
    //   this.eventService.post(params.id).subscribe((event: Event) => {
    //     console.log(event);
    //     this.event = event || new Event();
    //   })
    // );
  }
}
