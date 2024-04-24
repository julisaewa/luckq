import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-ai-china',
  templateUrl: './ai-china.component.html',
  styleUrls: ['./ai-china.component.css']
})
export class AiChinaComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
