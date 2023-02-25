import { Pipe, PipeTransform } from '@angular/core';
import { STRING_REPLACE_SPLIT } from 'src/app/constants/regulars';

@Pipe({ name: 'kebabCase' })
export class KebabCasePipe implements PipeTransform {
  transform(value: string): string {
    if (value && typeof value !== 'string') {
      throw new Error('Value is not a string.');
    }
    return value && value.match(STRING_REPLACE_SPLIT).map(char => char.toLowerCase()).join('-');
  }
}
