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
