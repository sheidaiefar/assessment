import { Pipe, PipeTransform } from '@angular/core';

export type Order = 'asc' | 'desc';

@Pipe({
  name: 'sorter',
})
export class SorterPipe implements PipeTransform {
  transform(
    value: any[],
    order: Order | string = 'asc',
    sortKey?: string
  ): any {
    order = order && (order.toLowerCase() as any);

    if (!value || (order !== 'asc' && order !== 'desc')) return value;

    let numberArray = [];
    let stringArray = [];

    if (!sortKey) {
      numberArray = value.filter((item) => typeof item === 'number').sort();
      stringArray = value.filter((item) => typeof item === 'string').sort();
    } else {
      numberArray = value
        .filter((item) => typeof item[sortKey] === 'number')
        .sort((a, b) => a[sortKey] - b[sortKey]);
      stringArray = value
        .filter((item) => typeof item[sortKey] === 'string')
        .sort((a, b) => {
          if (a[sortKey] < b[sortKey]) return -1;
          else if (a[sortKey] > b[sortKey]) return 1;
          else return 0;
        });
    }
    const sorted = numberArray.concat(stringArray);
    return order === 'asc' ? sorted : sorted.reverse();
  }
}
