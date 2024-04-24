import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-bishkek',
  templateUrl: './bishkek.component.html',
  styleUrls: ['./bishkek.component.css']
})
export class BishkekComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
