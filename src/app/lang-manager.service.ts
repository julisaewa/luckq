import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LangManagerService {

  baseLang = 'ru';
  lang = 'ru';
  langDir = '/assets/langs/';
  langDict: string[] = [];
  baseLangDict: string[] = [];
  langChanged = new Subject();
  constructor(private ar: ActivatedRoute, private http: HttpClient) {
    this.ar.queryParams.subscribe(params => {
      if (params['lang'] != null){
        this.lang = params['lang'];
      }
      else if (localStorage.getItem('lang') != null){
        this.lang = localStorage.getItem('lang')!;
      }
      this.loadLang(this.lang);
    });
  }
  loadLang(lang: string){
    this.http.get(this.langDir + this.baseLang + '.txt', {responseType: 'text'}).subscribe(baseRes => {
      this.baseLangDict = baseRes.split('\n').map(x => x.replace('\r', '')).filter(x => x.length > 0);
      this.http.get(this.langDir + lang + '.txt', {responseType: 'text'}).subscribe(res => {
        this.langDict = res.split('\n').map(x => x.replace('\r', '')).filter(x => x.length > 0);
        this.langChanged.next('changed');
      });
    });
  }
  setLang(lang: string){
    this.lang = lang;
    localStorage.setItem('lang', lang);
    this.loadLang(lang);
  }
  tr(w: string){
    let findBase = this.baseLangDict.find(x => x == w);
    let res = w;
    if (findBase != null){
      res = this.langDict[this.baseLangDict.indexOf(findBase)];
    }
    return res;
  }
}
