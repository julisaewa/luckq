import { Component, OnInit } from '@angular/core';
import {LangManagerService} from "../../lang-manager.service";

@Component({
  selector: 'app-fendi',
  templateUrl: './fendi.component.html',
  styleUrls: ['./fendi.component.css']
})
export class FendiComponent implements OnInit {

  constructor(public t: LangManagerService) { }

  ngOnInit(): void {
  }

}
