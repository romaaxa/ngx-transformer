import { Pipe, PipeTransform } from '@angular/core';
import {STRING_REPLACE_UNION} from "../../constants/regulars";

@Pipe({ name: 'pascalCase' })
export class PascalCasePipe implements PipeTransform {
  transform(value: string): string {
    return value.replace(STRING_REPLACE_UNION, (match) => {
      if (typeof value !== 'string') {
        throw new Error('Value is not a string.');
      }
      return +match !== 0 ? match.toUpperCase() : '';
    });
  }
}
