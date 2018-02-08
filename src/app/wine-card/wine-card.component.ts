import { Component, OnInit, Input } from '@angular/core';
import {Wine} from './../wine';
@Component({
  selector: 'app-wine-card',
  templateUrl: './wine-card.component.html',
  styleUrls: ['./wine-card.component.css']
})
export class WineCardComponent implements OnInit {
  @Input('wine') wine: Wine;
  constructor() { }

  ngOnInit() {
  }

}
