import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-china-fasion',
  templateUrl: './china-fasion.component.html',
  styleUrls: ['./china-fasion.component.css']
})
export class ChinaFasionComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
