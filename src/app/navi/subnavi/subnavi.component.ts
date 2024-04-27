import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LangManagerService} from "../../lang-manager.service";
import {GeoManagerService} from "../../geo-manager.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-subnavi',
  templateUrl: './subnavi.component.html',
  styleUrls: ['./subnavi.component.css']
})
export class SubnaviComponent implements OnInit {

  hoveredMenu = '';
  weatherImage = '';
  weatherCelsius = '';
  lat = '';
  lon = '';

  langs = [
    Object({code: 'en', name: 'English', icon: 'en.svg'}),
    Object({code: 'kz', name: 'Qazaqsa', icon: 'kz.svg'}),
    Object({code: 'cn', name: '中文', icon: 'cn.svg'}),
    Object({code: 'ru', name: 'Русский', icon: 'ru.svg'}),
  ];
  display = false;
  constructor(public router: Router, public t: LangManagerService, private geo: GeoManagerService, public device: DeviceDetectorService) { }

  ngOnInit(): void {
    this.getWeather();
    this.getLocation();
  }

  getLangs(){
    return this.langs.filter(x => x.code != this.t.lang);
  }
  hoverMenu(menu: string) {
    this.hoveredMenu = menu;
  }
  isHover(menu: string){
    return this.hoveredMenu == menu;
  }

  pageClick(event: MouseEvent) {
    this.hoveredMenu = '';
  }

  unHoverMenu(social: string) {
    this.hoveredMenu = '';
  }

  protected readonly open = open;

  openUrl(url: string) {
    window.open(url, '_blank');
  }
  getLocation(){
    this.geo.getLocation().subscribe(geo => {
      console.log(geo);
      this.lon = geo.lon;
      this.lat = geo.lat;
    });
  }
  getWeather(){
    this.geo.getWeather().subscribe(weather => {
      console.log(weather);
      this.weatherImage = 'https:' + weather.current.condition.icon;
      this.weatherCelsius = weather.current.temp_c;
    });
  }

  openWeather() {
    window.open('https://yandex.ru/pogoda/?lat=' + this.lat + '&lon=' + this.lon);
  }
  openMaps() {
    window.open('https://yandex.ru/maps/?ll=' + this.lon + ',' + this.lat + '&z=11');
  }

}
