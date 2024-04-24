import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-russian-style',
  templateUrl: './russian-style.component.html',
  styleUrls: ['./russian-style.component.css']
})
export class RussianStyleComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
