import { Pipe, PipeTransform } from '@angular/core';

export class OrderByModel {
  public order: 'asc' | 'desc' = 'asc';
  public column!: string;
}

function Detector(param: string): OrderByModel {
  let orderBy = new OrderByModel();
  var splitted = param.split('-', 2);
  if (splitted.length == 2) {
    orderBy.order = 'desc';
  }
  orderBy.column = splitted[length - 1];
  return orderBy;
}

function CheckDataType(data: any[]) {
  let dataType;

  if (!data) {
    return '';
  }

  if (data.every((x) => typeof x === 'string')) {
    return (dataType = 'string');
  }

  if (data.every((x) => typeof x === 'number')) {
    return (dataType = 'number');
  }

  if (data.every((x) => x instanceof Date)) {
    return (dataType = 'date');
  }

  if (data.every((x) => x instanceof Object)) {
    return (dataType = 'object');
  }

  return dataType;
}

function SortArray(data: any[], param: string): any[] {
  if (!data) {
    return [];
  }

  let orderBy = Detector(param as string);

  return [];
}

@Pipe({
  name: 'sort',
})
export class SortPipe implements PipeTransform {
  transform(value: any[], params: string[] | string): any[] {
    console.log('data:', typeof value[0]);
    console.log('value', CheckDataType(value));

    if (!value || params === '' || !params || params.length == 0) {
      return value;
    } // no array

    if (value.length <= 1) {
      return value;
    } // array with only one item

    if (typeof params === 'string') {
      let orderBy = Detector(params as string);
      if (orderBy.order == 'desc') {
        return value.sort().reverse();
      } else {
        return value.sort();
      }
    }

    params.forEach((param) => {
      SortArray(value, param);
    });

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
