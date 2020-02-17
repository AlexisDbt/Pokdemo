import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe'
})
export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], searchPokemon?: string): any {
    if (typeof pokemons !== 'undefined') {
      return pokemons.filter((e) => {
        return e.name.toLowerCase().indexOf(searchPokemon.toLowerCase()) !== -1;
      });
    } else {
      return [];
    }
  }
}
