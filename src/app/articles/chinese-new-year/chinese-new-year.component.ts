import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-chinese-new-year',
  templateUrl: './chinese-new-year.component.html',
  styleUrls: ['./chinese-new-year.component.css']
})
export class ChineseNewYearComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
