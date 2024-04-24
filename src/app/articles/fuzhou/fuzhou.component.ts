import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-fuzhou',
  templateUrl: './fuzhou.component.html',
  styleUrls: ['./fuzhou.component.css']
})
export class FuzhouComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
