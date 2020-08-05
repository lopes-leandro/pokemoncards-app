import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-wrapper',
  templateUrl: './card-wrapper.component.html',
  styleUrls: ['./card-wrapper.component.scss']
})
export class CardWrapperComponent implements OnInit {

  @Input() cards: [] = [];

  constructor() { }

  ngOnInit(): void {
    // console.log(this.cards)
  }

}
