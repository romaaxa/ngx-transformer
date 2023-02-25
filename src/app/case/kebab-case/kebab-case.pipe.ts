import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kebabCase' })
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    if (value && typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }
    const matches = value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g);
    return matches && matches.length ? matches.map(char => char.toLowerCase()).join('-') : '';
  }
}
