import { Pipe, PipeTransform } from '@angular/core';
import numbro from 'numbro';

@Pipe({
  name: 'numbroFormatNumber'
})
export class NumbroFormatNumberPipe implements PipeTransform {
  
  /**
   * Main numbro format pipe with all available configurations
   * @param value would be converted to string
   * @link https://numbrojs.com/format.html#numbers
   */
  transform(
      value: number,
      mantissa: number = 0,
      thousandSeparated: boolean = false,
    ): string {
    if (typeof value !== 'number') {
      throw new Error('Value is not a number.');
    }
    return numbro(value).format({
      thousandSeparated: thousandSeparated,
      mantissa: mantissa,
    });
  }
}
