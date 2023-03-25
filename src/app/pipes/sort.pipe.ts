import { Pipe, PipeTransform } from '@angular/core';


export type order = 'asc' | 'desc' | string ;

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any[], paramz: string[] | string): any[] {
    if (!value || paramz === '' || !paramz || paramz.length == 0) {
      return value;
    } // no array

    if (value.length <= 1) {
      return value;
    } // array with only one item

    return [];
  }

  // transform(value: any[], order = '', column: string = ''): any[] {

  //   if (!column || column === '') {
  //     if (order === 'asc') {
  //       return value.sort();
  //     } else {
  //       return value.sort().reverse();
  //     }
  //   }
  //   // return orderBy(value, [column], [order]);
  //   return [];
  // }
}
