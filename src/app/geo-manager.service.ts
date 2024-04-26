import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GeoManagerService {

  rest = 'https://luckq.org/rest/';

  constructor(private http: HttpClient) { }

  getLocation(){
    return this.http.get<any>(this.rest + 'location');
  }
  getWeather(){
    return this.http.get<any>(this.rest + 'weather');
  }
}
