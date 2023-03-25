import { Pipe, PipeTransform } from '@angular/core';

export type order = 'asc' | 'desc' | string;

@Pipe({
  name: 'sorting',
})
export class SortingPipe implements PipeTransform {
  transform(value: any[], order = '', column: string = ''): any[] {
    if (!value || order === '' || !order) {
      return value;
    } // no array
    if (value.length <= 1) {
      return value;
    } // array with only one item
    if (!column || column === '') {
      if (order === 'asc') {
        return value.sort();
      } else {
        return value.sort().reverse();
      }
    }
    // return orderBy(value, [column], [order]);
    return [];
  }
}
