import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CalendarEvent} from "./interfaces/calendar-event";

@Injectable({
  providedIn: 'root'
})
export class EventManagerService {

  rest = 'https://luckq.org/rest/';
  constructor(private http: HttpClient) {

  }

  getEvents(){
    return this.http.get<CalendarEvent[]>(this.rest + 'events');
  }
}
