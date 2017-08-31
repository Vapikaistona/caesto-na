import { Pipe, PipeTransform } from '@angular/core';
import { Troop } from '../../classes/troop';

@Pipe({
    name: 'troopFilter',
    pure: false
})
export class TroopFilterPipe implements PipeTransform {
  transform(items: Troop[], filter: Troop): Troop[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Troop) => this.applyFilter(item, filter));
  }


  applyFilter(book: Troop, filter: Troop): boolean {
    for (let field in filter) {
      if (filter[field]) {
        if (typeof filter[field] === 'string') {
          if (book[field].toLowerCase().indexOf(filter[field].toLowerCase()) === -1) {
            return false;
          }
        } else if (typeof filter[field] === 'number') {
          if (book[field] !== filter[field]) {
            return false;
          }
        }
      }
    }
    return true;
  }
}
