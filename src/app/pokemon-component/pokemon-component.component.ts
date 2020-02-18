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
  filterPok: string = '';

  pokemons: Pokemon [] = [
    {id: 1, name: 'Salerno'},
    {id: 2, name: 'Sarrazin'},
    {id: 3, name: 'Chapon'},
    {id: 4, name: 'Dulac'},
    {id: 5, name: 'Quiche'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
