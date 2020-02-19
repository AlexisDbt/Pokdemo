import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListPokemon } from './list-pokemon';
import { Pokemon } from './pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokéAPIService {

  url: string;
  pokemonUrl: any

  constructor(private http: HttpClient) { 
      this.url = "https://pokeapi.co/api/v2/pokemon/"
  }

  getPokemons(): Observable<ListPokemon>{
    return this.http.get<ListPokemon>(`${this.url}`)
  }

  getOnePokemon(name: string): Observable<Pokemon> {
    this.pokemonUrl = this.url + name;
    return this.http.get<Pokemon>(`${this.pokemonUrl}`)
  }
}
