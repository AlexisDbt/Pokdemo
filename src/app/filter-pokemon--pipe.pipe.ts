// // @ts-ignore
// import { Pipe, PipeTransform } from '@angular/core';

// @Pipe({
//   name: 'filterPokemonPipe',
//   pure: false
// })

// export class FilterPokemonPipePipe implements PipeTransform {

//   transform(pokemons: any[], property?: string, searchPokemon?: string): any {
//     console.log(property);
//     console.log(searchPokemon);

//     if(searchPokemon != undefined){
//         if (typeof pokemons !== 'undefined' && pokemons != null) {
//           return pokemons.filter((e) => {
//             return e[property].toLowerCase().indexOf(searchPokemon.toLowerCase()) !== -1;
//           });
//         } else {
//           return [];
//         }
//       }
//     }

// }

import {Pipe, PipeTransform} from '@angular/core';

import {Pokemon} from './pokemon';

@Pipe({
  name: 'filterPokemonPipe',
  pure: false
})

export class FilterPokemonPipePipe implements PipeTransform {

  static applyFilter(item: Pokemon, filterPok: Pokemon): boolean {
    return !(filterPok.name && item.name.toLowerCase().indexOf(filterPok.name.toLowerCase()) === -1);
  }

  transform(items: Pokemon[], filterPok: Pokemon): Pokemon[] {
    if (!items || !filterPok) {
      return items;
    }
    return items.filter((item: Pokemon) => FilterPokemonPipePipe.applyFilter(item, filterPok));
  }
}
