import { Component, OnInit } from '@angular/core';
import {ArtNewsComponent} from "./art-news/art-news.component";
import {ActivatedRoute} from "@angular/router";
import {ChineseNewYearComponent} from "./chinese-new-year/chinese-new-year.component";
import {FasionWeekMoscowComponent} from "./fasion-week-moscow/fasion-week-moscow.component";
import {FuzhouComponent} from "./fuzhou/fuzhou.component";
import {ChinaFasionComponent} from "./china-fasion/china-fasion.component";
import {RussianStyleComponent} from "./russian-style/russian-style.component";
import {FendiComponent} from "./fendi/fendi.component";
import {IntelligenceComponent} from "./intelligence/intelligence.component";


@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  articles: any[] = [
    {name: 'chineseNewYear', component: ChineseNewYearComponent},
    {name: 'fasionWeekMoscow', component: FasionWeekMoscowComponent},
    {name: 'fuzhou', component: FuzhouComponent},
    {name: 'china-fasion', component: ChinaFasionComponent},
    {name: 'russian-style', component: RussianStyleComponent},
    {name: 'intelligence', component: IntelligenceComponent},
    {name: 'fendi', component: FendiComponent},
  ].reverse();
  articlesShown: any[] = [];
  latestShown = 0;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      let artName = params['article'];
      if (artName != null){
        let article = this.articles.find(x => x.name == artName);
        if (article != null && this.articlesShown.length == 0){
          this.articlesShown.push(article);
          this.articles.splice(this.articles.indexOf(article), 1);
        }
        else{
          this.addArticle();
        }
      }
      else{
        this.addArticle();
      }
    });
  }

  onScrollDown() {
    this.addArticle();
  }
  onScrollUp() {

  }
  addArticle(){
    if (this.articles.length > this.latestShown){
      this.articlesShown.push(this.articles[this.latestShown++]);
    }
  }
}
