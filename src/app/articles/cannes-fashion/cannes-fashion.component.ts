import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-cannes-fashion',
  templateUrl: './cannes-fashion.component.html',
  styleUrls: ['./cannes-fashion.component.css']
})
export class CannesFashionComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
