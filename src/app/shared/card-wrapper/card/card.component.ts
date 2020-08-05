import { Component, OnInit, Input } from '@angular/core';
import { CardsPageableModel } from '../../models/cards-pageable.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() card: CardsPageableModel;

  constructor() { }

  ngOnInit(): void {
   
  }

}
