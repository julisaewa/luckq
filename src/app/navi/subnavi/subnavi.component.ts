import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

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
  constructor(public router: Router) { }

  ngOnInit(): void {
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
