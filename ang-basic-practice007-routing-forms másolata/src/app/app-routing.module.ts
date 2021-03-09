import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { EventEditorComponent } from './event-editor/event-editor.component';
import { Event1Component } from './event/1/event1.component';
import { Event2Component } from './event/event2/event2.component';
import { Event3Component } from './event/event3/event3.component';
import { Event4Component } from './event/event4/event4.component';
import { EventsListComponent } from './page/events-list/events-list.component';

const routes: Routes = [
  { path: '', component: EventsListComponent },
  { path: '1', component: Event1Component },
  { path: '2', component: Event2Component },
  { path: '3', component: Event3Component },
  { path: '4', component: Event4Component },
  { path: 'event-editor', component: EventEditorComponent },
  { path: '**', component: EventsListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
