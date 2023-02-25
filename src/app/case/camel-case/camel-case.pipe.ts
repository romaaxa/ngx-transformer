import { Pipe, PipeTransform } from '@angular/core';
import { STRING_REPLACE_UNION } from 'src/app/constants/regulars';

@Pipe({ name: 'camelCase' })
export class CamelCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(STRING_REPLACE_UNION, (match, index) => {
      if (typeof value !== 'string') {
        throw new Error('Value is not a string.');
      }
      return +match === 0 ? "" : index === 0 ? match.toLowerCase() : match.toUpperCase();
    });
  }
}
