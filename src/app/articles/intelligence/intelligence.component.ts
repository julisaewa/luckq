import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-intelligence',
  templateUrl: './intelligence.component.html',
  styleUrls: ['./intelligence.component.css']
})
export class IntelligenceComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
