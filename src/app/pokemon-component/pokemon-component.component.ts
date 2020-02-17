import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-component',
  templateUrl: './pokemon-component.component.html',
  styleUrls: ['./pokemon-component.component.css']
})
export class PokemonComponentComponent implements OnInit {

  id: string = '';
  choixPoke: string = '';

  pokemons: Pokemon [] = [
    {id: 1, name: 'Bulbizarre'},
    {id: 2, name: 'Salameche'},
    {id: 3, name: 'Carapuce'},
    {id: 4, name: 'Tortank'},
    {id: 5, name: 'Dracaufeu'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
