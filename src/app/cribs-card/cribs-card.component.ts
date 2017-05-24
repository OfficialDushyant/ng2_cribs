import { Component, OnInit, Input } from '@angular/core';
import {Crib} from './../crib';
@Component({
  selector: 'app-cribs-card',
  templateUrl: './cribs-card.component.html',
  styleUrls: ['./cribs-card.component.css']
})
export class CribsCardComponent implements OnInit {

  @Input('crib') crib: any;
  constructor() { }

  ngOnInit() {
    let bedrooms = this.crib.bedrooms;
    let kitchen = this.crib.kitchen;
  }
}
