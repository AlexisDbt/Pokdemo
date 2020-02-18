import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';
import { PokéAPIService } from '../pokéapi.service';
import { ListPokemon } from '../list-pokemon';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css'],
  providers: [PokéAPIService]
})
export class PokemonComponentComponent implements OnInit {

  id: number;
  choixPoke: Pokemon;
  filterPok: string;
  message: string = '';
  pokemons: ListPokemon;

  constructor(public pokemonApi : PokéAPIService) { }

  ngOnInit(): void {
    this.pokemonApi.getPokemons().subscribe(res => {
      console.log(res);
        this.pokemons = res;
    });
  }

  getOnePokemon(pokemon: Pokemon) {
    this.pokemonApi.getOnePokemon(pokemon.name).subscribe(
      res => {
        this.choixPoke = res;
      }
    );
  }

  SelectedPoke () {
    this.message = "Pokémon sélectionné : " + this.choixPoke;
  }

}
