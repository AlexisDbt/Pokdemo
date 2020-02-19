import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterPokemonPipe',
  pure: false
})

export class FilterPokemonPipePipe implements PipeTransform {

  transform(pokemons: any[], property?: string, searchPokemon?: string): any {
    console.log(property);
    console.log(searchPokemon);

    if(searchPokemon != undefined){
        if (typeof pokemons !== 'undefined' && pokemons != null) {
          return pokemons.filter((e) => {
            return e[property].toLowerCase().indexOf(searchPokemon.toLowerCase()) !== -1;
          });
        } else {
          return [];
        }
      }
    }
    
}
