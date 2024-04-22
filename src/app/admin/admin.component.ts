import { Component, OnInit } from '@angular/core';
import {EventManagerService} from "../event-manager.service";
import {sha256} from "js-sha256";
import * as _ from "underscore";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  minDate = new Date();
  selectedDate = new Date();
  awaitForLoad: any[] = [];
  calendarPages: any[] = [];
  movies: any[] = [];
  movieKind: string = 'ТИП';
  loginName: string = '';
  password: string = '';
  check = '9894a82b471c2a1d801a973cf7d6afdfb2af067d3b12df7a693e1590e55621f4';
  authorized = false;
  constructor(public s: EventManagerService) { }

  ngOnInit(): void {
    this.fillCalendarPages();
    this.fillMovies();
    if (localStorage.getItem('movieKind') != null){
      this.movieKind = localStorage.getItem('movieKind')!;
    }
    if (localStorage.getItem('hash') != null){
      let hash = localStorage.getItem('hash')!;
      this.authorized = hash == this.check;
    }
  }

  handleFileInputCalendarPage(files: FileList | null) {
    if (files != null){
      for (let x = 0; x < files.length; x++){
        let file = files.item(x);
        if (file != null){
          let fileName = file.name;
          this.awaitForLoad.push(fileName);
          this.s.uploadFile(file, fileName).subscribe(url => {
            console.log(url);
            this.awaitForLoad.splice(this.awaitForLoad.indexOf(fileName), 1);
            let cPage = Object({
              id: 0,
              day: this.selectedDate.getDate(),
              month: this.selectedDate.getMonth() + 1,
              year: this.selectedDate.getFullYear(),
              url: url,
              removed: 0,
            });
            this.s.updateCalendarPage(cPage).subscribe(() => {
              this.fillCalendarPages();
            });
          });
        }
      }
    }
  }
  handleFileInputMovie(files: FileList | null) {
    if (files != null){
      for (let x = 0; x < files.length; x++){
        let file = files.item(x);
        if (file != null){
          let fileName = file.name;
          this.awaitForLoad.push(fileName);
          console.log('start load');
          this.s.uploadFile(file, fileName).subscribe(url => {
            console.log(url);
            this.awaitForLoad.splice(this.awaitForLoad.indexOf(fileName), 1);
            let m = Object({
              id: 0,
              name: fileName.replace('.mp4', ''),
              kind: this.movieKind,
              url: url,
              removed: 0,
            });
            this.s.updateMovie(m).subscribe(() => {
              this.fillMovies();
            });
          });
        }
      }
    }
  }

  private fillCalendarPages() {
    this.s.getCalendarPages().subscribe(res => {
      this.calendarPages = _.sortBy(res, x => x.id);
      console.log(res);
    });
  }
  private fillMovies() {
    this.s.getMovies().subscribe(res => {
      this.movies = res;
      console.log(res);
    });
  }


  getCalendarPages(){
    let d = this.selectedDate.getDate();
    let m = this.selectedDate.getMonth() + 1;
    let y = this.selectedDate.getFullYear();
    return this.calendarPages.filter((x: any) => x.day == d && x.month == m && x.year == y);
  }
  deleteCalendarPage(c: any) {
    c.removed = 1;
    this.s.updateCalendarPage(c).subscribe(() => {
      this.fillCalendarPages();
    });
  }

  deleteMovie(m: any) {
    m.removed = 1;
    this.s.updateMovie(m).subscribe(() => {
      this.fillMovies();
    });
  }

  saveMovie(m: any) {
    this.s.updateMovie(m).subscribe(() => {
      this.fillMovies();
    });
  }

  setMovieKind() {
    localStorage.setItem('movieKind', this.movieKind);
  }

  login() {
    let hash = sha256(this.loginName + this.password);
    if (hash == this.check){
      this.authorized = true;
      localStorage.setItem('hash', hash);
    }
  }
}
