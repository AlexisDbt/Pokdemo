import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})

export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], property?: string, searchPokemon?: string): any {
    if (typeof pokemons !== 'undefined') {
      return pokemons.filter((e) => {
        return e[property].toLowerCase().indexOf(searchPokemon.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
