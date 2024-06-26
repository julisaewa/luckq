import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import * as AOS from 'aos';
import {ActivatedRoute, Router} from "@angular/router";
import {ShopImage} from "../interfaces/shop-image";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import * as url from "url";
import {EventManagerService} from "../event-manager.service";
import {CalendarEvent} from "../interfaces/calendar-event";
import {animate, state, style, transition, trigger} from '@angular/animations';
import * as _ from 'underscore';
import {MegaMenuItem} from "primeng/api";
import {LangManagerService} from "../lang-manager.service";
import {GeoManagerService} from "../geo-manager.service";
import {DeviceDetectorService} from "ngx-device-detector";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        opacity: 1,
      })),
      state('closed', style({
        opacity: 0,
      })),
      transition('open => closed', [
        animate('0.5s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ],

})
export class HomeComponent implements OnInit {

  images = [
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4740.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4740.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4746.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4746.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4728.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4728.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4745.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4745.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
  ];
  images2 = [
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4737.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4737.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4736.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4736.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4732.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4732.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4763.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4763.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
    {
      previewImageSrc: 'assets/photo/articles/3Y8A4782.JPG',
      thumbnailImageSrc: 'assets/photo/articles/3Y8A4782.JPG',
      alt: 'Description for Image 1',
      title: 'Title 1'
    },
  ];


  imgsSrc: ShopImage[] = [];
  imgs: ShopImage[] = [];
  imageWidth = 463;
  dir = 'assets/photo/shop/';
  animation = false;
  animationDuration = 800;
  animationTimeout = 100;
  imageHover = -1;
  events: CalendarEvent[] = [];
  loading = true;
  videoTime = 0;
  newsVideos: any[] = [];
  playingPromo = false;
  playingVideo = -1;
  volume = 0;
  uiHover = false;
  touched = false;
  pipActive = false;
  rightBannerRatio = 2.6;

  leftSliderImages: any[] = [
    {src: '/assets/banner/12.png', url: 'https://marustudio.ru/'},
    {src: '/assets/banner/11.png', url: 'https://stockmann.ru/'},
    {src: '/assets/banner/1.png', url: 'https://thedubaimall.com/'},
    {src: '/assets/banner/2.png', url: 'https://dubaioutletmall.com/'},
    {src: '/assets/banner/3.png', url: 'https://vnukovo-outlet.com/'},
    {src: '/assets/banner/4.png', url: 'https://www.mallofantalya.com.tr/'},
    {src: '/assets/banner/5.png', url: 'https://fashionweekonline.com/'},
    {src: '/assets/banner/6.png', url: 'https://vnukovo-outlet.com/post/mesyacz-lyubvi-vo-vnukovo-outlet-village.html'},
    {src: '/assets/banner/7.png', url: 'https://www.malloftheemirates.com/en'},
    {src: '/assets/banner/8.png', url: 'https://ovbelayadacha.com/'},
    {src: '/assets/banner/9.png', url: 'https://www.dubaimarinamall.com/'},
    {src: '/assets/banner/10.png', url: 'https://www.dubaihillsmall.ae/'},
  ];
  leftSliderImagesMobile: any[] = [
    {src: '/assets/banner/12m.png', url: 'https://marustudio.ru/'},
    {src: '/assets/banner/11m.png', url: 'https://stockmann.ru/'},
    {src: '/assets/banner/1m.png', url: 'https://thedubaimall.com/'},
    {src: '/assets/banner/2m.png', url: 'https://dubaioutletmall.com/'},
    {src: '/assets/banner/3m.png', url: 'https://vnukovo-outlet.com/'},
    {src: '/assets/banner/5m.png', url: 'https://fashionweekonline.com/'},
    {src: '/assets/banner/6m.png', url: 'https://vnukovo-outlet.com/post/mesyacz-lyubvi-vo-vnukovo-outlet-village.html'},
    {src: '/assets/banner/7m.png', url: 'https://www.malloftheemirates.com/en'},
    {src: '/assets/banner/8m.png', url: 'https://ovbelayadacha.com/'},
    {src: '/assets/banner/9m.png', url: 'https://www.dubaimarinamall.com/'},
    {src: '/assets/banner/10m.png', url: 'https://www.dubaihillsmall.ae/'},

  ];
  leftSliderImagesAutoplayInterval = 12 * 1000;

  rightSliderImages: any[] = [
    {src: '/assets/exhibition/beauty.png', url: 'https://expoposition.com/beautyexpo/information-2/'},
    {src: '/assets/exhibition/beautyexpo.png', url: 'https://www.probeauty.co.za/johannesburgexpo'},
    {src: '/assets/exhibition/bridal.png', url: 'https://www.qatarbridalshow.com/en/home/'},
    {src: '/assets/exhibition/bti.png', url: 'https://bti.by/'},
    {src: '/assets/exhibition/lady.png', url: 'https://ladyexpo.by/'},
    {src: '/assets/exhibition/leshow.png', url: 'https://leshow.ru/'},
    {src: '/assets/exhibition/loveme.png', url: 'https://iloveme.messukeskus.com/'},
    {src: '/assets/exhibition/moda-fest.png', url: 'https://moda-fest.ru/ru-RU/'},
    {src: '/assets/exhibition/textile.png', url: 'https://www.internationalapparelandtextilefair.com/'},
  ];
  rightSliderImagesMobile: any[] = [
    {src: '/assets/exhibition/beauty-m.png', url: 'https://expoposition.com/beautyexpo/information-2/'},
    {src: '/assets/exhibition/beautyexpo-m.png', url: 'https://www.probeauty.co.za/johannesburgexpo'},
    {src: '/assets/exhibition/bridal-m.png', url: 'https://www.qatarbridalshow.com/en/home/'},
    {src: '/assets/exhibition/bti-m.png', url: 'https://bti.by/'},
    {src: '/assets/exhibition/lady-m.png', url: 'https://ladyexpo.by/'},
    {src: '/assets/exhibition/leshow-m.png', url: 'https://leshow.ru/'},
    {src: '/assets/exhibition/loveme-m.png', url: 'https://iloveme.messukeskus.com/'},
    {src: '/assets/exhibition/moda-fest-m.png', url: 'https://moda-fest.ru/ru-RU/'},
    {src: '/assets/exhibition/textile-m.png', url: 'https://www.internationalapparelandtextilefair.com/'},
  ];
  rightSliderImagesAutoplayInterval = 16 * 1000;

  rightSliderArticles: any[] = [];
  rightSliderArticlesAutoplayInterval = 18 * 1000;

  //menWomenTimeout = 1;
  menWomenTimeout = 22;
  showMenWomen = true;

  videoListShow = false;
  calendarBackground = '';
  marksArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  marks = '';



  calendarNews = [
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 1', 'Какое-то суперважное события для кого-то особенного 1'),
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 2', 'Какое-то суперважное события для кого-то особенного 2'),
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 3', 'Какое-то суперважное события для кого-то особенного 3'),
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 4', 'Какое-то суперважное события для кого-то особенного 4'),
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 5', 'Какое-то суперважное события для кого-то особенного 5'),
    new CalendarEvent(0, 16, 4, 2024, 'Лунный', 'Название 6', 'Какое-то суперважное события для кого-то особенного 6')
  ];
  selectedCalendarNews: CalendarEvent | null = null;
  videoPreview = false;

  calendarPages: any[] = [];
  calendarPagesSplit1: any[] = [];
  calendarPagesSplit2: any[] = [];
  selectedCalendarPage = '';
  selectedCalendarPageVisislbe = false;
  today = new Date();
  currentMonth = this.today.getMonth();
  moviesMenu: any[] = [];

  weatherImage = '';
  weatherCelsius = '';

  constructor(private router: Router, public eventsManager: EventManagerService, public t: LangManagerService, private geo: GeoManagerService, public device: DeviceDetectorService) {
    this.fillCalendarPages();
    this.fillMovies();
    setTimeout(() => {
      this.showMenWomen = false;
    }, this.menWomenTimeout * 1000);
    this.imgsSrc.push(new ShopImage(this.dir + '0.png', this.dir + '0-1.png', 'СУМКА BUMPER-31 TERRY JW ANDERSON', 'https://svg.moda/womens/sumki-dlya-zhenshin/sumki-tout-dlya-zhenshin/sumka-bumper-31-terry-jw-anderson-ja-2367010'));
    this.imgsSrc.push(new ShopImage(this.dir + '1.png', this.dir + '0-1.png', 'СУМКА SOFT MARGAUX 17 THE ROW', 'https://svg.moda/womens/sumki-dlya-zhenshin/sumki-tout-dlya-zhenshin/sumka-soft-margaux-17-the-row-tr-2360096'));
    this.imgsSrc.push(new ShopImage(this.dir + '2.png', this.dir + '0-1.png', 'БАЛЕТКИ PUNTERA HEREU КОРИЧНЕВЫЕ', 'https://svg.moda/womens/obuv-dlya-zhenshin/baletki-dlya-zhenshin/baletki-puntera-hereu-hereu-2362435'));
    this.imgsSrc.push(new ShopImage(this.dir + '3.png', this.dir + '0-1.png', 'РУБАШКА DELA THE ROW', 'https://svg.moda/womens/odezhda-dlya-zhenshin/bluzy-i-rubashki-dlya-zhenshin/rubashka-dela-the-row-tr-2370528'));
    this.imgsSrc.push(new ShopImage(this.dir + '4.png', this.dir + '0-1.png', 'ОНИКЕРЫ GOLDEN GOOSE', 'https://svg.moda/womens/obuv-dlya-zhenshin/krossovki-i-kedy-dlya-zhenshin/onikery-golden-goose-gg-2369623'));
    this.imgsSrc.push(new ShopImage(this.dir + '5.png', this.dir + '0-1.png', 'СУМКА JW ANDERSON', 'https://svg.moda/womens/sumki-dlya-zhenshin/sumki-kross-bodi-dlya-zhenshin/sumka-jw-anderson-ja-2370028'));
    this.imgsSrc.push(new ShopImage(this.dir + '6.png', this.dir + '0-1.png', 'СУМКА SOLENE MINI CULT GAIA', 'https://svg.moda/womens/sumki-dlya-zhenshin/sumki-tout-dlya-zhenshin/sumka-solene-mini-cult-gaia-cg-2368738'));
    this.imgsSrc.push(new ShopImage(this.dir + '7.png', this.dir + '0-1.png', 'КУРТКА ALEXANDRE VAUTHIER', 'https://svg.moda/womens/odezhda-dlya-zhenshin/kurtki-dlya-zhenshin/kurtka-alexandre-vauthier-av-2370481'));
    this.imgsSrc.push(new ShopImage(this.dir + '8.png', this.dir + '0-1.png', 'БАЛЕТКИ PUNTERA HEREU', 'https://svg.moda/womens/obuv-dlya-zhenshin/baletki-dlya-zhenshin/baletki-puntera-hereu-hereu-2351544'));
    this.imgsSrc.push(new ShopImage(this.dir + '9.png', this.dir + '0-1.png', 'СОЛНЦЕЗАЩИТНЫЕ ОЧКИ SHARP CAT EYE BOTTEGA VENETA', 'https://svg.moda/womens/aksessuary-dlya-zhenshin/solncezashitnye-ochki-dlya-zhenshin/solncezashitnye-ochki-sharp-cat-eye-bottega-veneta-bv-2370754'));
    for (let x = 0; x < 8; x++){
      this.imgs.push(this.imgsSrc[x]);
    }
    this.t.langChanged.subscribe(ch => {
      this.setMarks();
      this.setRightSliderArticles();
    });
  }

  setMarks(){
    this.marks = '  <mark class="marquee-mark">| ' + this.t.tr('Счастье зависит от нас самих. Аристотель') + '</mark>' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - это состояние души. Оно зависит от твоего взгляда на вещи. Уолт Дисней') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Простота делает меня счастливой. Алисия Кис') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - секрет всей красоты. Без счастья нет красоты. Кристиан Диор') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Подумайте обо всей красоте, которая еще осталась вокруг вас, и будьте счастливы. Анна Франк') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье состоит в том, чтобы проживать каждый день так, как будто это первый день вашего медового месяца и последний день вашего отпуска. Лев Толстой') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Будьте счастливы в этот момент. Этот момент - ваша жизнь. Омар Хайям') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Истинно мудрые и счастливые никогда не спешат. Максим Лагачев') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('От одной свечи можно зажечь тысячи свечей, и жизнь ее не станет короче. Счастье никогда не уменьшается от того, что им делятся. Будда') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - это не цель, это побочный продукт хорошо прожитой жизни. Чарльз М. Шульц') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье зависит от нас самих. Аристотель') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - это состояние души. Оно зависит от твоего взгляда на вещи. Уолт Дисней') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Простота делает меня счастливой. Алисия Кис') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - секрет всей красоты. Без счастья нет красоты. Кристиан Диор') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Подумайте обо всей красоте, которая еще осталась вокруг вас, и будьте счастливы. Анна Франк') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье состоит в том, чтобы проживать каждый день так, как будто это первый день вашего медового месяца и последний день вашего отпуска. Лев Толстой') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Будьте счастливы в этот момент. Этот момент - ваша жизнь. Омар Хайям') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Истинно мудрые и счастливые никогда не спешат. Максим Лагаче') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('От одной свечи можно зажечь тысячи свечей, и жизнь ее не станет короче. Счастье никогда не уменьшается от того, что им делятся. Будда') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье - это не цель, это побочный продукт хорошо прожитой жизни. Чарльз М. Шульц') + '</mark>\n' +
      '        <mark class="marquee-mark">| ' + this.t.tr('Счастье зависит от нас самих. Аристотель') + '</mark>';
  }
  setRightSliderArticles(){
    this.rightSliderArticles = [
      {src: '/assets/articles/' + this.t.lang + '/china-wall.jpg', url: '/articles?article=china-wall'},
      {src: '/assets/articles/' + this.t.lang + '/cannes-fashion-thumb.jpg', url: '/articles?article=cannes-fashion'},
      {src: '/assets/articles/' + this.t.lang + '/met-gala-thumb.jpg', url: '/articles?article=met-gala'},
      {src: '/assets/articles/' + this.t.lang + '/bishkek-thumb.png', url: '/articles?article=bishkek'},
      {src: '/assets/articles/' + this.t.lang + '/ai-china-thumb.png', url: '/articles?article=ai-china'},
      {src: '/assets/articles/' + this.t.lang + '/fendi-thumb.png', url: '/articles?article=fendi'},
      {src: '/assets/articles/' + this.t.lang + '/ai-thumb.png', url: '/articles?article=intelligence'},
      {src: '/assets/articles/' + this.t.lang + '/russian-style-thumb.png', url: '/articles?article=russian-style'},
      {src: '/assets/articles/' + this.t.lang + '/china-fashion-thumb.png', url: '/articles?article=china-fasion'},
      {src: '/assets/articles/' + this.t.lang + '/fuzhou-thumb.png', url: '/articles?article=fuzhou'},
      {src: '/assets/articles/' + this.t.lang + '/week-thumb.png', url: '/articles?article=fasionWeekMoscow'},
    ];
  }
  ngOnInit(): void {
    AOS.init({
      duration: 750,
      delay: 50,
    });
    setTimeout(() => {
      AOS.refresh();
    }, 100);
    this.eventsManager.getEvents().subscribe(res => {
      console.log(res);
      this.events = res;
    });
    this.playingVideo = 0;
    // this.getWeather();
    // this.getLocation();
  }
  openArticle(article: string): void {
    this.router.navigate(['articles'], { queryParams: {article}});
  }


  move(c: HTMLDivElement, direction: number){
    this.animation = true;
    c.style.transition = this.animationDuration + 'ms';
    c.style.transform = 'translateX(' + (-1 * direction * this.imageWidth) + 'px)';
    setTimeout(() => {
      let newImages: ShopImage[] = [];
      this.imgs.forEach(img => {
        let src = this.imgsSrc.indexOf(this.imgsSrc.find(x => x.image == img.image)!);
        let next = (direction > 0) ? ((src + 1) % 10) : (src - 1);
        if (next < 0){
          next = this.imgsSrc.length - 1;
        }
        //newImages.push(new ShopImage(this.dir + next + '.png', this.dir + next + '-1.png'));
        newImages.push(this.imgsSrc[next]);
      });
      c.style.transition = '0s';
      this.imgs = newImages;
      c.style.transform = 'translateX(0px)';
      this.animation = false;
    }, this.animationDuration + this.animationTimeout);
  }

  urlOpen(url: string) {
    window.open(url)
  }

  getDate() {
    let d = new Date();
    let day = this.alz(d.getDate());
    let month = this.formatMonth(d.getMonth());
    let year = this.alz(d.getFullYear());
    let sep = ' ';
    return [day, month, year].join(sep);
  }

  formatMonth(monthNumber: number){
    let monthes: string[] = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    return monthes[monthNumber];
  }
  alz(input: any, length: number = 2){
    let res = input.toString();
    while (res.length < length){
      res = '0' + res;
    }
    return res;
  }

  getEvents(kind: string = ''): CalendarEvent[] {
    let d = new Date();
    return this.events.filter(x => x.day == d.getDate() && x.month == (d.getMonth() + 1) && x.year == d.getFullYear()).filter(x => x.kind == kind || kind == '');
  }


  getProgressSize(videoTime: number, duration: number) {
    return{
      'background-size': (videoTime / duration * 100) + '%' + ' 100%'
    }
  }
  getVideoTime(secondsTotal: number){
    let minutes = Math.floor(secondsTotal / 60);
    let seconds = Math.round(secondsTotal % 60);
    return (' ' + '0' + minutes).slice(-2) + ':' + ('0' + seconds).slice(-2) + ' ';
  }
  playNextClassic() {
    this.pipActive = document.pictureInPictureElement != null;
    this.playingVideo = (this.playingVideo + 1) % this.newsVideos.length;
    this.touched = true;
  }
  playPrevClassic() {
    this.pipActive = document.pictureInPictureElement != null;
    if (this.playingVideo == 0){
      this.playingVideo = this.newsVideos.length - 1;
    }
    else{
      this.playingVideo = (this.playingVideo - 1) % this.newsVideos.length;
    }
    this.touched = true;
  }
  videoLoaded(event: Event, videoPlayer: HTMLVideoElement) {
    this.loading = false;
    videoPlayer.volume = this.volume;
    if (this.pipActive){
      videoPlayer.requestPictureInPicture();
    }
  }

  protected readonly open = open;

  openUrl(url: string) {
    open(url, '_blank')
  }

  getMonth() {
    switch (this.currentMonth){
      case 0: return 'Январь';
      case 1: return 'Февраль';
      case 2: return 'Март';
      case 3: return 'Апрель';
      case 4: return 'Май';
      case 5: return 'Июнь';
      case 6: return 'Июль';
      case 7: return 'Август';
      case 8: return 'Сентябрь';
      case 9: return 'Октябрь';
      case 10: return 'Ноябрь';
      case 11: return 'Декабрь';
      default: return this.currentMonth;
    }
  }
  private fillCalendarPages() {
    this.eventsManager.getCalendarPages().subscribe(res => {
      let date = new Date();
      let d = date.getDate();
      let m = date.getMonth() + 1;
      let y = date.getFullYear();
      this.calendarPages = _.sortBy(res.filter((x: any) => x.day == d && x.month == m && x.year == y), x => x.id);
    });
  }

  previewPoint: any = Object({x: 0, y: 0});
  getImagePreviewStyle() {
    return {
      position: 'fixed',
      left: this.previewPoint.x + 'px',
      top: this.previewPoint.y + 'px',
    };
  }

  previewImage(url: string, event: MouseEvent) {
    this.selectedCalendarPageVisislbe = true;
    this.selectedCalendarPage = url;

    this.previewPoint.x = event.clientX - 173;
    if (this.previewPoint.x < 0){
      this.previewPoint.x = 15;
    }

    if (window.innerWidth - this.previewPoint.x - 200 < 100){
      this.previewPoint.x -= 100;
    }


    this.previewPoint.y = event.clientY - 510;
  }

  resetImagePreview() {
    this.selectedCalendarPageVisislbe = false;
    this.selectedCalendarPage = '';
  }

  private fillMovies() {
    this.eventsManager.getMovies().subscribe(res => {
      this.newsVideos = res.map(x => x.url);
      this.moviesMenu = this.fillMoviesMenu(res);
    });
  }
  private fillMoviesMenu(videosSrc: any[]) {
    let res: MegaMenuItem[] = [];
    let groupOfGroups: any[] = [];
    let videos = _.sortBy(videosSrc, x => x.id).reverse();
    let groups: any[] = [];
    _.forEach(_.groupBy(videos, x => x.kind), gr => {
      let videos = gr.map(x => ({
        label: x.name,
        command: () => {
          let findVideo = this.newsVideos.find(y => y == x.url);
          this.playingVideo = this.newsVideos.indexOf(findVideo);
        },
        id: x.id
      }));
      let newGroup: any[] = [];
      newGroup.push(({
        label: gr[0].kind,
        items: videos
      }));
      if (groups.concat(newGroup).flatMap(x => x.items).length > 14){
        groupOfGroups.push([...groups]);
        groups.splice(0, groups.length);
        newGroup.forEach(g => groups.push(g));
      }
      else{
        newGroup.forEach(g => groups.push(g));
      }
    });
    groupOfGroups.push(groups);
    res.push(({
      label: '',
      icon: 'pi pi-fw pi-bars',
      items: groupOfGroups,
    }));
    return res;
  }
  getLocation(){
    this.geo.getLocation().subscribe(geo => {
      console.log(geo);
    });
  }
  getWeather(){
    this.geo.getWeather().subscribe(weather => {
      console.log(weather);
      this.weatherImage = 'https:' + weather.current.condition.icon;
      this.weatherCelsius = weather.current.temp_c;
    });
  }

  setPlayingVideo(video: string) {
    this.newsVideos.push(video);
    this.playingVideo = this.newsVideos.length - 1;
    this.playingPromo = true;
  }

  getLeftBannerStyle() {
    let videoHeight = 0;
    let findVideo = document.getElementsByClassName("yt-player")[0];

    if (findVideo != null){
      videoHeight = findVideo.clientHeight;
    }
    return {
      height: videoHeight + 'px',
      width: (videoHeight / 1.7275) + 'px'
    };
  }
  getLeftBannerHeight() {
    let videoHeight = 0;
    let findVideo = document.getElementsByClassName("yt-player")[0];
    if (findVideo != null){
      videoHeight = findVideo.clientHeight;
    }
    return videoHeight + 'px';
  }


  getRightCircleBannerHeight() {
    let videoHeight = 0;
    let findVideo = document.getElementsByClassName("yt-player-m")[0];
    if (findVideo != null){
      videoHeight = findVideo.clientHeight;
    }
    return videoHeight / this.rightBannerRatio + 'px';
  }

  getRightCircleBannerStyle() {
    let videoHeight = 0;
    let findVideo = document.getElementsByClassName("yt-player")[0];

    if (findVideo != null){
      videoHeight = findVideo.clientHeight;
    }
    return {
      height: videoHeight / this.rightBannerRatio + 'px',
      width: (videoHeight / this.rightBannerRatio) + 'px'
    };
  }

  getRighVideoBannerStyle() {
    let videoHeight = 0;
    let findVideo = document.getElementsByClassName("yt-player")[0];

    if (findVideo != null){
      videoHeight = findVideo.clientHeight;
    }
    return {
      height: 'auto',
      width: (videoHeight / this.rightBannerRatio) + 'px'
    };
  }
}
