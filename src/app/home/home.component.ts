import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';
import {Router} from "@angular/router";

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


  constructor(private router: Router) { }

  marksArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  marks = '   <mark class="marquee-mark">| Счастье зависит от нас самих. Аристотель</mark>' +
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
  }

  openArticle(article: string): void {
    this.router.navigate(['articles'], { queryParams: {article}});
  }

}
