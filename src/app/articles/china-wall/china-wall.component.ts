import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-china-wall',
  templateUrl: './china-wall.component.html',
  styleUrls: ['./china-wall.component.css']
})
export class ChinaWallComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
