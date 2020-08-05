import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardsPageableModel } from '../models/cards-pageable.model';

@Injectable({
  providedIn: 'root'
})
export class ApiCardsService {

  API_URL: string = 'https://api.pokemontcg.io/v1/cards';

  constructor(private httpClient: HttpClient) {
    ;
  }

  /**
   * getCardsWithFlag
   */
  public getCardsWithFlag(flag?: string): Observable<[]> {
    return this.httpClient.get<[]>(this.API_URL + '?page=1&pageSize=20&supertype=Pokémon');
  }
  public getPokemonById(pokemonId: string): Observable<Array<any>> {
    return this.httpClient.get<Array<any>>(this.API_URL + `?id=${pokemonId}`);
  }
}
