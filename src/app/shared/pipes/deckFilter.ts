import { Pipe, PipeTransform } from '@angular/core';
import { Deck } from '../../classes/deck';

@Pipe({
    name: 'deckFilter',
    pure: false
})
export class DeckFilterPipe implements PipeTransform {
  transform(items: Deck[], filter: Deck): Deck[] {
    if (!items || !filter) {
      return items;
    }
    // filter items array, items which match and return true will be kept, false will be filtered out
    return items.filter((item: Deck) => this.applyFilter(item, filter));
  }


  applyFilter(book: Deck, filter: Deck): boolean {
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
