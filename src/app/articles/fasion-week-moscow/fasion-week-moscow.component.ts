import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-fasion-week-moscow',
  templateUrl: './fasion-week-moscow.component.html',
  styleUrls: ['./fasion-week-moscow.component.css']
})
export class FasionWeekMoscowComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
