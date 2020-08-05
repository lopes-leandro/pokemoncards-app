import { Component, OnInit } from '@angular/core';
import { ApiCardsService } from 'src/app/shared/service/api-cards.service';
import { CardsPageableModel } from 'src/app/shared/models/cards-pageable.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  cards: CardsPageableModel[] = [];

  constructor(public apiCardsService: ApiCardsService) { }

  ngOnInit(): void {
    this.getCards();
  }

  getCards() {
    this.apiCardsService.getCardsWithFlag().subscribe(data => {
      let tmp: CardsPageableModel[] = []
      data['cards'].map((field) => {
        const { attacks, name, id, imageUrl, imageUrlHiRes, types, weaknesses, resistances } = field;
        tmp.push({ attacks, name, id, imageUrl, imageUrlHiRes, types, weaknesses, resistances });
      });
      this.cards.push(...tmp.sort((a,b) => a.name.localeCompare(b.name)));
    });
  }
}
