import { Pipe, PipeTransform } from '@angular/core';

export class OrderByModel {
  public order: 'asc' | 'desc' = 'asc';
  public column!: string;
}

export enum DataType {
  string,
  number,
  object,
  date,
}

function OrderBy(param: string): OrderByModel {
  let orderBy = new OrderByModel();
  var splitted = param.split('-', 2);
  if (splitted.length == 2) {
    orderBy.order = 'desc';
  }
  orderBy.column = splitted[splitted.length - 1];
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

  let sortedData = [];
  let orderBy = OrderBy(param as string);
  let dataType = CheckDataType(data);
  let col = orderBy.column;
  let order = orderBy.order;

  switch (dataType) {
    case 'string':
      sortedData = data.sort((n1, n2) => {
        if (n1 > n2) {
          return 1;
        }

        if (n1 < n2) {
          return -1;
        }

        return 0;
      });
      break;

    case 'number':
      sortedData = data.sort((n1, n2) => n1 - n2);
      break;

    case 'date':
      sortedData = data.sort(
        (a: any, b: any) =>
          new Date(a.col).getTime() - new Date(b.col).getTime()
      );
      break;

    case 'object':
      sortedData = data.sort((n1, n2) => {
        if (n1.col > n2.col) {
          return 1;
        }

        if (n1.col < n2.col) {
          return -1;
        }

        return 0;
      });
      break;

    default:
      break;
  }

  if (order == 'desc') {
    sortedData = sortedData.reverse();
  }
  return sortedData;
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

    if (typeof params === 'string') {
      value = SortArray(value, params);
    } else {
      params.forEach((param) => {
        value = SortArray(value, param);
      });
    }

    return value;
  }
}
