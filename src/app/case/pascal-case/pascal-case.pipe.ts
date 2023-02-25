import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'pascalCase' })
export class PascalCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g, (match) => {
      if (typeof value !== 'string') {
        throw new Error('Value is not a string.');
      }
      return +match !== 0 ? match.toUpperCase() : '';
    });
  }
}
