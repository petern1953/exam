import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EventsListComponent } from './page/events-list/events-list.component';
import { NavigationComponent } from './common/navigation/navigation.component';
import { Event3Component } from './event/event3/event3.component';
import { Event4Component } from './event/event4/event4.component';
import { EventEditorComponent } from './event-editor/event-editor.component';

// const appRouting: Routes = [

// ]

@NgModule({
  declarations: [
    AppComponent,
    EventsListComponent,
    NavigationComponent,
    Event3Component,
    Event4Component,
    EventEditorComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
