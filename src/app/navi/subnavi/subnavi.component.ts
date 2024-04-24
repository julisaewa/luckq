import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-subnavi',
  templateUrl: './subnavi.component.html',
  styleUrls: ['./subnavi.component.css']
})
export class SubnaviComponent implements OnInit {

  hoveredMenu = '';

  itemNews = [
    {
      label: 'Статьи',
      icon: 'pi pi-comment',
      command: () => { this.router.navigate(['articles'] )}
    },
    {
      label: 'Выставки',
      icon: 'pi pi-ticket',
      command: () => { window.open('https://www.expoclub.ru/')}
    },
    // {
    //   label: 'Выставки',
    //   icon: 'pi pi-tag',
    //   command: () => { document.getElementById('exhibitions')!.scrollIntoView({behavior: 'smooth'}) }
    // },
  ];
  itemTravel = [
    {
      label: 'Авиасейлс',
      icon: 'pi pi-map',
      command: () => { window.open('https://www.aviasales.ru/')}
    },
    {
      label: 'Booking',
      icon: 'pi pi-tag',
      command: () => { window.open('https://www.booking.com/')}
    },
  ];
  itemShop = [
    {
      label: 'OZON',
      command: () => { window.open('https://www.ozon.ru/')}
    },
    {
      label: 'Wildberries',
      command: () => { window.open('https://www.wildberries.ru/')}
    },
    {
      label: 'Яндекс. Маркет',
      command: () => { window.open('https://market.yandex.ru/')}
    },
  ];
  itemMedia = [
    {
      label: 'Вконтакте',
      command: () => { window.open('https://vk.com/')}
    },
    {
      label: 'Instagram',
      command: () => { window.open('https://www.instagram.com/')}
    },
    {
      label: 'Telegram',
      command: () => { window.open('https://t.me/telegram')}
    },
  ];
  itemTech = [
    {
      label: 'Онлайн примерочная',
      command: () => { window.open('')}
    },
  ];
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
    '        <mark class="marquee-mark">| Счастье - это не цель, это побочный продукт хорошо прожитой жизни. Чарльз М. Шульц</mark>\n' +
    '        <mark class="marquee-mark">| Счастье зависит от нас самих. Аристотель</mark>\n' +
    '        <mark class="marquee-mark">| Счастье - это состояние души. Оно зависит от твоего взгляда на вещи. Уолт Дисней</mark>\n' +
    '        <mark class="marquee-mark">| Простота делает меня счастливой. Алисия Кис </mark>\n' +
    '        <mark class="marquee-mark">| Счастье - секрет всей красоты. Без счастья нет красоты. Кристиан Диор </mark>\n' +
    '        <mark class="marquee-mark">| Подумайте обо всей красоте, которая еще осталась вокруг вас, и будьте счастливы. Анна Франк </mark>\n' +
    '        <mark class="marquee-mark">| Счастье состоит в том, чтобы проживать каждый день так, как будто это первый день вашего медового месяца и последний день вашего отпуска. Лев Толстой | </mark>\n' +
    '        <mark class="marquee-mark">| Будьте счастливы в этот момент. Этот момент - ваша жизнь. Омар Хайям </mark>\n' +
    '        <mark class="marquee-mark">| Истинно мудрые и счастливые никогда не спешат. Максим Лагаче </mark>\n' +
    '        <mark class="marquee-mark">| От одной свечи можно зажечь тысячи свечей, и жизнь ее не станет короче. Счастье никогда не уменьшается от того, что им делятся. Будда </mark>\n' +
    '        <mark class="marquee-mark">| Счастье - это не цель, это побочный продукт хорошо прожитой жизни. Чарльз М. Шульц</mark>\n' +
    '        <mark class="marquee-mark">| Счастье зависит от нас самих. Аристотель</mark>';


  langs = [
    Object({code: 'en', name: 'English', icon: 'en.svg'}),
    Object({code: 'kz', name: 'Qazaq', icon: 'kz.svg'}),
    Object({code: 'cn', name: '中文', icon: 'cn.svg'}),
    Object({code: 'ru', name: 'Русский', icon: 'ru.svg'}),
  ];
  constructor(public router: Router, public t: LangManagerService) { }

  ngOnInit(): void {
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

}
