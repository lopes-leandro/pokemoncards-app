import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiCardsService } from 'src/app/shared/service/api-cards.service';
import { CardsPageableModel } from 'src/app/shared/models/cards-pageable.model';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  card: CardsPageableModel;
  pokemonId: string;

  constructor(private route: ActivatedRoute, private router: Router, private apiCardsService: ApiCardsService) {
    route.params.subscribe(params => {
      this.pokemonId = params.pokemonId;

      this.apiCardsService.getPokemonById(this.pokemonId).subscribe(data => {

        data['cards'].length === 0 ? router.navigate(['/']) : '';
        setTimeout(
          data['cards'].map((card) => {
            this.card = {
              ...new CardsPageableModel(),
              attacks: card.attacks,
              id: card.id,
              imageUrl: card.imageUrl,
              imageUrlHiRes: card.imageUrlHiRes,
              name: card.name,
              types: card.types,
              weaknesses: card.weaknesses,
              resistances: card.resistances,
            };
          })
          , 2000)
      });

    });
  }

  ngOnInit(): void {
  }
}
