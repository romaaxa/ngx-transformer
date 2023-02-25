import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'flatCase' })
export class FlatCasePipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    if (value && typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }
    return value && value
      .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
      .map(char => char.toLowerCase())
      .join('');
  }
}
