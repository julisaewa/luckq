import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-art-news',
  templateUrl: './art-news.component.html',
  styleUrls: ['./art-news.component.css']
})
export class ArtNewsComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
