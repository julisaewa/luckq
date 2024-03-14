import {ChangeDetectorRef, Component, OnInit, ViewChild} from '@angular/core';
import * as AOS from 'aos';
import {Router} from "@angular/router";
import {ShopImage} from "../interfaces/shop-image";
import {ChangeDetection} from "@angular/cli/lib/config/workspace-schema";
import * as url from "url";
import {EventManagerService} from "../event-manager.service";
import {CalendarEvent} from "../interfaces/calendar-event";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
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

  constructor(private router: Router, public eventsManager: EventManagerService) {
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
  }


  marksArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  marks = '  <mark class="marquee-mark">| Счастье зависит от нас самих. Аристотель</mark>' +
    '        <mark class="marquee-mark">| Счастье - это состояние души. Оно зависит от твоего взгляда на вещи. Уолт Дисней</mark>\n' +
    '        <mark class="marquee-mark">| Простота делает меня счастливой. Алисия Кис </mark>\n' +
    '        <mark class="marquee-mark">| Счастье - секрет всей красоты. Без счастья нет красоты. Кристиан Диор </mark>\n' +
    '        <mark class="marquee-mark">| Подумайте обо всей красоте, которая еще осталась вокруг вас, и будьте счастливы. Анна Франк </mark>\n' +
    '        <mark class="marquee-mark">| Счастье состоит в том, чтобы проживать каждый день так, как будто это первый день вашего медового месяца и последний день вашего отпуска. Лев Толстой | </mark>\n' +
    '        <mark class="marquee-mark">| Будьте счастливы в этот момент. Этот момент - ваша жизнь. Омар Хайям </mark>\n' +
    '        <mark class="marquee-mark">| Истинно мудрые и счастливые никогда не спешат. Максим Лагаче </mark>\n' +
    '        <mark class="marquee-mark">| От одной свечи можно зажечь тысячи свечей, и жизнь ее не станет короче. Счастье никогда не уменьшается от того, что им делятся. Будда </mark>\n' +
    '        <mark class="marquee-mark">| Счастье - это не цель, это побочный продукт хорошо прожитой жизни. Чарльз М. Шульц</mark>';
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
}
