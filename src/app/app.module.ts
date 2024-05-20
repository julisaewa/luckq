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
import {NgMarqueeModule} from "ng-marquee";
import { FasionWeekMoscowComponent } from './articles/fasion-week-moscow/fasion-week-moscow.component';
import {HttpClientModule} from "@angular/common/http";
import {MenuModule} from "primeng/menu";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { FuzhouComponent } from './articles/fuzhou/fuzhou.component';
import { ChinaFasionComponent } from './articles/china-fasion/china-fasion.component';
import { RussianStyleComponent } from './articles/russian-style/russian-style.component';
import { FendiComponent } from './articles/fendi/fendi.component';
import { IntelligenceComponent } from './articles/intelligence/intelligence.component';
import {ProgressSpinnerModule} from "primeng/progressspinner";
import {FormsModule} from "@angular/forms";
import {CarouselModule} from "primeng/carousel";
import {MegaMenuModule} from "primeng/megamenu";
import {MenubarModule} from "primeng/menubar";
import {PanelMenuModule} from "primeng/panelmenu";
import {VirtualScrollerModule} from "primeng/virtualscroller";
import {DialogModule} from "primeng/dialog";
import { AdminComponent } from './admin/admin.component';
import {CalendarModule} from "primeng/calendar";
import {InputTextModule} from "primeng/inputtext";
import { BishkekComponent } from './articles/bishkek/bishkek.component';
import { AiChinaComponent } from './articles/ai-china/ai-china.component';
import {SidebarModule} from "primeng/sidebar";
import { MetGalaComponent } from './articles/met-gala/met-gala.component';
import { CannesFilmComponent } from './articles/cannes-film/cannes-film.component';
import { CannesFashionComponent } from './articles/cannes-fashion/cannes-fashion.component';
import {AccordionModule} from "primeng/accordion";
import { ChinaWallComponent } from './articles/china-wall/china-wall.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArticlesComponent,
    ArtNewsComponent,
    ChineseNewYearComponent,
    NaviComponent,
    SubnaviComponent,
    FasionWeekMoscowComponent,
    FuzhouComponent,
    ChinaFasionComponent,
    RussianStyleComponent,
    FendiComponent,
    IntelligenceComponent,
    AdminComponent,
    BishkekComponent,
    AiChinaComponent,
    MetGalaComponent,
    CannesFilmComponent,
    CannesFashionComponent,
    ChinaWallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    GalleriaModule,
    InfiniteScrollModule,
    NgMarqueeModule,
    HttpClientModule,
    MenuModule,
    ProgressSpinnerModule,
    FormsModule,
    CarouselModule,
    MegaMenuModule,
    MenubarModule,
    PanelMenuModule,
    VirtualScrollerModule,
    DialogModule,
    CalendarModule,
    InputTextModule,
    SidebarModule,
    AccordionModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
