import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Event3Component } from './event3.component';

describe('Event3Component', () => {
  let component: Event3Component;
  let fixture: ComponentFixture<Event3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Event3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Event3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
