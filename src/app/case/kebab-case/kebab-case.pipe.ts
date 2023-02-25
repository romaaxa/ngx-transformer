import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'kebabCase' })
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    if (value && typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }
    return value && value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map(char => char.toLowerCase()).join('-');
  }
}
