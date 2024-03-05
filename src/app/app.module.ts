import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {GalleriaModule} from "primeng/galleria";
import { ArticlesComponent } from './articles/articles.component';
import {InfiniteScrollModule} from "ngx-infinite-scroll";
import { ArtNewsComponent } from './articles/art-news/art-news.component';
import { ChineseNewYearComponent } from './articles/chinese-new-year/chinese-new-year.component';
import { NaviComponent } from './navi/navi.component';
import { SubnaviComponent } from './navi/subnavi/subnavi.component';
import { FooterComponent } from './footer/footer.component';
import {NgMarqueeModule} from "ng-marquee";
import { FasionWeekMoscowComponent } from './articles/fasion-week-moscow/fasion-week-moscow.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArtNewsComponent,
    ChineseNewYearComponent,
    NaviComponent,
    SubnaviComponent,
    FooterComponent,
    FasionWeekMoscowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GalleriaModule,
    InfiniteScrollModule,
    NgMarqueeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
