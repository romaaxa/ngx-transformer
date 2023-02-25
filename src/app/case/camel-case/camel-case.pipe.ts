import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, function (match, index) {
      if (typeof value !== 'string') {
        throw new Error('Value is not a string.');
      }
      if (+match === 0) {
        return "";
      }
      return index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
