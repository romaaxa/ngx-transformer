import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    if (typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }
    return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match, index) => {
      return +match === 0 ? '' : index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
