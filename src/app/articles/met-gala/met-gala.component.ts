import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-met-gala',
  templateUrl: './met-gala.component.html',
  styleUrls: ['./met-gala.component.css']
})
export class MetGalaComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
