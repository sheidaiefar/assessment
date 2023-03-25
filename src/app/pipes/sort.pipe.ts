import { Pipe, PipeTransform } from '@angular/core';

export class OrderByModel {
  public order: 'asc' | 'desc' = 'asc';
  public column!: string;
}

function detector(param: string): OrderByModel {
  let orderBy = new OrderByModel();
  var splitted = param.split('-', 2);
  if (splitted.length == 2) {
    orderBy.order = 'desc';
  }
  orderBy.column = splitted[length - 1];
  return orderBy;
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], params: string[] | string): any[] {
    if (!value || params === '' || !params || params.length == 0) {
      return value;
    } // no array

    if (value.length <= 1) {
      return value;
    } // array with only one item

    if (params as string) {
      let orderBy = detector(params as string);
      if (orderBy.order == 'desc') {
        return value.sort().reverse();
      } else {
        return value.sort();
      }
    }

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
