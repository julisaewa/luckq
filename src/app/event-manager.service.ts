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
  getCalendarPages(){
    return this.http.get<any[]>(this.rest + 'pages');
  }
  getMovies(){
    return this.http.get<any[]>(this.rest + 'movies');
  }
  uploadFile(file: File, fileName: string){
    const formData: FormData = new FormData();
    formData.append('file', file, fileName);
    return this.http.post<any>(this.rest + 'file', formData);
  }
  updateCalendarPage(calendarPage: any) {
    return this.http.post<any>(this.rest + '/page', calendarPage);
  }
  updateMovie(movie: any) {
    return this.http.post<any>(this.rest + '/movie', movie);
  }
}
